import Blits from '@lightningjs/blits'

export default Blits.Component('TextItem', {
  template: `
    <Element>
      <Text :content="$myarr" y="50" color="#aaffaa" />
      <Text
        :for="(item, index) in $items"
        :content="$item"
        :y="(50 * $index) + 100"
        color="#ffaaaa"
      />
    </Element>
    `,
  props: ['items', 'myarr'],
})
