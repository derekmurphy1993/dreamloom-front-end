#!/bin/bash

curl "https://oreironautapi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASS}"'",
      "password_confirmation": "'"${PASS}"'"
    }
  }'

echo
