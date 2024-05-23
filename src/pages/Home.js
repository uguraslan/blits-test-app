import Blits from '@lightningjs/blits'
import TextItem from '../components/TextItem'

export default Blits.Component('Home', {
  components: {
    TextItem,
  },
  template: `
    <Element x="400" y="100">
      <TextItem :items="$itemsA" :myarr="$myarr" />
    </Element>
    `,
  state() {
    return {
      itemsA: ['1', '2', '3', '4'],
      myarr: ['m', 'y', 'a', 'r', 'r'],
    }
  },
  hooks: {
    ready() {
      const result = ['option 1', 'option 2', 'option 3', 'option 4']
      this.$setTimeout(() => {
        result.forEach((option) => {
          this.itemsA.push(option)
        })
      }, 1)
    },
  },
})
