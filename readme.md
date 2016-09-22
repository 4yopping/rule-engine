Rule Engine
========

Example of rule engine using [node-rules](https://github.com/mithunsatheesh/node-rules)

# Conditions

Get conditions from JSON file (or database)

```
[{
  "property": "products",
  "operator": "in",
  "value": [
    "57e3f55e307299deac7d07f2",
    "57e3f564307299deac7d07f3"
  ]
}, {
  "property": "price",
  "operator": "lt",
  "value": 5000
}]
```
