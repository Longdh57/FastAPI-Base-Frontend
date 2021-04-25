<template>
  <CCardBody>
    <CDataTable
      :items="users"
      :fields="fields"
      column-filter
      table-filter
      items-per-page-select
      :items-per-page="5"
      sorter
      pagination
      clickable-rows
      hover
      @row-clicked="rowClicked"
    >
      <template #select="{item}">
        <td>
          <CInputCheckbox
            :checked="item._selected"
            @update:checked="() => check(item)"
            custom
          />
        </td>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import usersData from '../users/UsersData'

const fields = [
  { 
    key: 'select', 
    label: '', 
    _style: 'min-width:1%', 
    sorter: false,
    filter: false
  },
  { key: 'username', _style:'min-width:40%' },
  'registered',
  { key: 'role', _style:'min-width:20%;' },
  { key: 'status', _style:'min-width:20%;' },
]

export default {
  name: 'SelectTable',
  data () {
    return {
      usersData: usersData.map((item, id) => { return {...item, id}}),
      fields
    }
  },
  computed: {
    users () {
      return this.usersData.map(user => {
        return {
          ...user,
          _classes: [
            user._classes, 
            user._selected ? 'table-selected' : ''
          ]
        }
      })
    }
  },
  methods: {
    rowClicked (item, index, column, e) {
      if (!['INPUT', 'LABEL'].includes(e.target.tagName)) {
        this.check(item)
      }
    },
    check (item) {
      const val = Boolean(this.usersData[item.id]._selected)
      this.$set(this.usersData[item.id], '_selected', !val)
    }
  }
}
</script>