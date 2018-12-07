import CheckList from './CheckList'
import Damage from './Damage'
import General from './General'
import Signature from './Signature'
import Users from './Users'
import Vehicle from './Vehicle'
import Welcome from './Welcome'
import Comments from './Coments'
import Inventory from './Inventory'
import Review from './Review'

import _ from 'lodash'

const keyed = {
  checkList: CheckList,
  damage: Damage,
  general: General,
  signature: Signature,
  users: Users,
  vehicle: Vehicle,
  welcome: Welcome,
  review: Review,
  comments: Comments,
  inventory: Inventory,
}

export default function getText (lang, category, path) {
  return _.get(keyed[category], path + '.' + lang.toLowerCase(), 'Invalid getText path: ' + path)
}

export const allAt = (category, path) => {
  return _.keys(_.get(keyed[category]), path, 'Invalid getText path: ' + path)
}
