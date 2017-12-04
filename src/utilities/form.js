import { fromJS, Map } from 'immutable'

export const formSchemaToKeyVal = (schema) => {
  // Receives an immutable map of a schema, then assigns the nested values to the keys.
  return fromJS(schema).flatMap((value, key) => { return Map({ [key]: value.get('value') }) })
}
