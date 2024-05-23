import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'

export default Blits.Application({
  template: `
    <Element w="1920" h="1080" color="#000033">
      <RouterView />
    </Element>
    `,
  routes: [{ path: '/', component: Home }],
})
