import mongooseResource from '../lib/mongoose-resource';
import Foo from '../models/phone';  // a mongoose Model

export default mongooseResource('foo', Foo);