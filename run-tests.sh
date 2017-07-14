#!/bin/sh

cleanup() {
  git checkout test/config/index.js
}

trap cleanup INT

COMPONENT=$1

if [ ! -z "$COMPONENT" ]
  then
    echo 'Running tests for' $COMPONENT
    sed -i "" "s|('../app/', true, /\\\\.js/)|('../', false, /\\\\$COMPONENT.js/)|g" test/config/index.js
fi

export NODE_ENV=test && node_modules/karma/bin/karma start test/config/karma.local.conf.js

cleanup
