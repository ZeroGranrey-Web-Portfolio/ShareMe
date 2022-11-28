import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import user from "./user";
import pin from "./pin";
import comment from "./comment";
import save from "./save";
import postedBy from "./postedBy";

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  types: schemaTypes.concat([user, pin, comment, save, postedBy]),
});
