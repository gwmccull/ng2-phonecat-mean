import mongooseResource from '../lib/mongoose-resource';
import Foo from '../models/phones';  // a mongoose Model

export default mongooseResource('foo', Foo);