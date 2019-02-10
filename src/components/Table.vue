<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Поиск" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Что будем искать?" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Очистить</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    
    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
    >
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Подробнее
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    
    <b-row>
      <b-col class="my-1">
        <b-pagination align="center" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
    
    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <b-list-group>
        <b-list-group-item v-bind:key="key" v-for="(value, key) in modalInfo.item">
          <b>{{ key }}:</b> {{ value }}
        </b-list-group-item>
      </b-list-group>
    </b-modal>
    
    <b-table :items="historyItems" :fields="historyFields" caption-top v-if="historyItems.length">
      <template slot="table-caption">
        Последние просмотренные корабли
      </template>
    </b-table>
  
  </b-container>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Table",
    data () {
      return {
        items: [],
        errors: [],
        next: "https://swapi.co/api/starships",
        fields: [
          { key: 'created', label: 'Дата создания', sortable: true, sortDirection: 'desc' },
          { key: 'name', label: 'Название', sortable: true, sortDirection: 'desc' },
          { key: 'starship_class', label: 'Класс', sortable: true, sortDirection: 'desc' },
          { key: 'cargo_capacity', label: 'Вместимость', sortable: true, sortDirection: 'desc' },
          { key: 'cost_in_credits', label: 'Стоимость', sortable: true, sortDirection: 'desc' },
          { key: 'actions', label: '' }
        ],
        currentPage: 1,
        perPage: 10,
        pageOptions: [ 5, 10, 15 ],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: { title: '', item: {} },
        historyItems: this.$store.state.lastWatchedStarships,
        historyFields: [
          { key: 'name', label: 'Название' },
          { key: 'watchTime', label: 'Время просмотра' }
        ]
      }
    },
    computed: {
      totalRows () {
        return this.items.length
      },
    },
    methods: {
      getStarships () {
        axios.get(this.next)
          .then((response) => {
            let $this = this;
            response.data.results.forEach(function (item) {
              item.created = new Date(Date.parse(item.created)).toLocaleString("ru")
              $this.items.push(item)
            });
            this.next = response.data.next;
            if (this.next) return this.getStarships()
          })
          .catch(error => {
            this.errors.push(error)
          })
      },
      info (item, date, button) {
        this.modalInfo.title = `${item.name}`
        delete item.films
        delete item.pilots
        this.modalInfo.item = item
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
        this.$store.commit('addWatchedStarship', {
          starship: item,
          date: new Date()
        })
      },
      resetModal () {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
      }
    },
    created() {
      this.getStarships()
    }
  }
</script>

<style scoped>

</style>