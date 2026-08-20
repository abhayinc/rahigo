import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import trek from './trek'
import destination from './destination'
import testimonial from './testimonial'
import settings from './settings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    trek,
    destination,
    testimonial,
    settings
  ]),
})
