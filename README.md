# edpm

educational node package manager

This is an experimental, lightweight, package manager for the node ecosystem. Built for educational purposes.

### Installation

Clone this repo.

- `git clone git@github.com:andrewvy/edpm.git`
- `cd edpm`

Install globally.

- `npm install -g`

Use it!

- `edpm install`

### Example

```
Personal/peachclient master| edpm install
edpm - installing peach-client@1.1.4
edpm - resolving q@^1.4.1
edpm - resolving request-promise@^1.0.2
edpm - installing q@1.4.1 into node_modules/q
edpm - installing request-promise@1.0.2 into node_modules/request-promise
edpm - fetching q@1.4.1 into node_modules/q
edpm - resolving bluebird@^2.3
edpm - resolving cls-bluebird@^1.0.1
edpm - resolving lodash@^3.10.0
edpm - resolving request@^2.34
edpm - fetching request-promise@1.0.2 into node_modules/request-promise
edpm - installing request@2.69.0 into node_modules/request-promise/node_modules/request
edpm - installing bluebird@2.10.2 into node_modules/request-promise/node_modules/bluebird
edpm - installing cls-bluebird@1.0.1 into node_modules/request-promise/node_modules/cls-bluebird
edpm - installing lodash@3.10.1 into node_modules/request-promise/node_modules/lodash
edpm - resolving aws-sign2@~0.6.0
edpm - resolving aws4@^1.2.1
edpm - resolving bl@~1.0.0
edpm - resolving caseless@~0.11.0
edpm - resolving combined-stream@~1.0.5
edpm - resolving extend@~3.0.0
edpm - resolving forever-agent@~0.6.1
edpm - resolving form-data@~1.0.0-rc3
edpm - resolving har-validator@~2.0.6
edpm - resolving hawk@~3.1.0
edpm - resolving http-signature@~1.1.0
edpm - resolving is-typedarray@~1.0.0
edpm - resolving isstream@~0.1.2
edpm - resolving json-stringify-safe@~5.0.1
edpm - resolving mime-types@~2.1.7
edpm - resolving node-uuid@~1.4.7
edpm - resolving oauth-sign@~0.8.0
edpm - resolving qs@~6.0.2
edpm - resolving stringstream@~0.0.4
edpm - resolving tough-cookie@~2.2.0
edpm - resolving tunnel-agent@~0.4.1
edpm - fetching request@2.69.0 into node_modules/request-promise/node_modules/request
edpm - fetching bluebird@2.10.2 into node_modules/request-promise/node_modules/bluebird
edpm - resolving shimmer@~1
edpm - fetching cls-bluebird@1.0.1 into node_modules/request-promise/node_modules/cls-bluebird
edpm - fetching lodash@3.10.1 into node_modules/request-promise/node_modules/lodash
edpm - installing shimmer@1.1.0 into node_modules/request-promise/node_modules/cls-bluebird/node_modules/shimmer
edpm - fetching shimmer@1.1.0 into node_modules/request-promise/node_modules/cls-bluebird/node_modules/shimmer
edpm - installing extend@3.0.0 into node_modules/request-promise/node_modules/request/node_modules/extend
edpm - installing aws-sign2@0.6.0 into node_modules/request-promise/node_modules/request/node_modules/aws-sign2
edpm - installing forever-agent@0.6.1 into node_modules/request-promise/node_modules/request/node_modules/forever-agent
edpm - installing caseless@0.11.0 into node_modules/request-promise/node_modules/request/node_modules/caseless
edpm - installing is-typedarray@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/is-typedarray
edpm - installing isstream@0.1.2 into node_modules/request-promise/node_modules/request/node_modules/isstream
edpm - installing stringstream@0.0.5 into node_modules/request-promise/node_modules/request/node_modules/stringstream
edpm - installing oauth-sign@0.8.1 into node_modules/request-promise/node_modules/request/node_modules/oauth-sign
edpm - installing json-stringify-safe@5.0.1 into node_modules/request-promise/node_modules/request/node_modules/json-stringify-safe
edpm - installing tunnel-agent@0.4.2 into node_modules/request-promise/node_modules/request/node_modules/tunnel-agent
edpm - installing bl@1.0.3 into node_modules/request-promise/node_modules/request/node_modules/bl
edpm - installing combined-stream@1.0.5 into node_modules/request-promise/node_modules/request/node_modules/combined-stream
edpm - installing form-data@1.0.0-rc4 into node_modules/request-promise/node_modules/request/node_modules/form-data
edpm - installing http-signature@1.1.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature
edpm - installing node-uuid@1.4.7 into node_modules/request-promise/node_modules/request/node_modules/node-uuid
edpm - installing aws4@1.3.2 into node_modules/request-promise/node_modules/request/node_modules/aws4
edpm - installing tough-cookie@2.2.2 into node_modules/request-promise/node_modules/request/node_modules/tough-cookie
edpm - installing har-validator@2.0.6 into node_modules/request-promise/node_modules/request/node_modules/har-validator
edpm - installing qs@6.0.2 into node_modules/request-promise/node_modules/request/node_modules/qs
edpm - installing hawk@3.1.3 into node_modules/request-promise/node_modules/request/node_modules/hawk
edpm - installing mime-types@2.1.10 into node_modules/request-promise/node_modules/request/node_modules/mime-types
edpm - fetching extend@3.0.0 into node_modules/request-promise/node_modules/request/node_modules/extend
edpm - fetching aws-sign2@0.6.0 into node_modules/request-promise/node_modules/request/node_modules/aws-sign2
edpm - fetching forever-agent@0.6.1 into node_modules/request-promise/node_modules/request/node_modules/forever-agent
edpm - fetching caseless@0.11.0 into node_modules/request-promise/node_modules/request/node_modules/caseless
edpm - fetching is-typedarray@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/is-typedarray
edpm - fetching isstream@0.1.2 into node_modules/request-promise/node_modules/request/node_modules/isstream
edpm - fetching stringstream@0.0.5 into node_modules/request-promise/node_modules/request/node_modules/stringstream
edpm - fetching oauth-sign@0.8.1 into node_modules/request-promise/node_modules/request/node_modules/oauth-sign
edpm - fetching json-stringify-safe@5.0.1 into node_modules/request-promise/node_modules/request/node_modules/json-stringify-safe
edpm - fetching tunnel-agent@0.4.2 into node_modules/request-promise/node_modules/request/node_modules/tunnel-agent
edpm - resolving readable-stream@~2.0.5
edpm - fetching bl@1.0.3 into node_modules/request-promise/node_modules/request/node_modules/bl
edpm - resolving delayed-stream@~1.0.0
edpm - fetching combined-stream@1.0.5 into node_modules/request-promise/node_modules/request/node_modules/combined-stream
edpm - resolving async@^1.5.2
edpm - resolving combined-stream@^1.0.5
edpm - resolving mime-types@^2.1.10
edpm - fetching form-data@1.0.0-rc4 into node_modules/request-promise/node_modules/request/node_modules/form-data
edpm - resolving assert-plus@^0.2.0
edpm - resolving jsprim@^1.2.2
edpm - resolving sshpk@^1.7.0
edpm - fetching http-signature@1.1.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature
edpm - fetching node-uuid@1.4.7 into node_modules/request-promise/node_modules/request/node_modules/node-uuid
edpm - resolving lru-cache@^4.0.0
edpm - fetching aws4@1.3.2 into node_modules/request-promise/node_modules/request/node_modules/aws4
edpm - fetching tough-cookie@2.2.2 into node_modules/request-promise/node_modules/request/node_modules/tough-cookie
edpm - resolving chalk@^1.1.1
edpm - resolving commander@^2.9.0
edpm - resolving is-my-json-valid@^2.12.4
edpm - resolving pinkie-promise@^2.0.0
edpm - fetching har-validator@2.0.6 into node_modules/request-promise/node_modules/request/node_modules/har-validator
edpm - fetching qs@6.0.2 into node_modules/request-promise/node_modules/request/node_modules/qs
edpm - resolving hoek@2.x.x
edpm - resolving boom@2.x.x
edpm - resolving cryptiles@2.x.x
edpm - resolving sntp@1.x.x
edpm - fetching hawk@3.1.3 into node_modules/request-promise/node_modules/request/node_modules/hawk
edpm - resolving mime-db@~1.22.0
edpm - fetching mime-types@2.1.10 into node_modules/request-promise/node_modules/request/node_modules/mime-types
edpm - installing delayed-stream@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream
edpm - fetching delayed-stream@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream
edpm - installing readable-stream@2.0.6 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream
edpm - installing assert-plus@0.2.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/assert-plus
edpm - installing sshpk@1.7.4 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk
edpm - installing jsprim@1.2.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim
edpm - installing pinkie-promise@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise
edpm - installing commander@2.9.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/commander
edpm - installing chalk@1.1.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk
edpm - installing is-my-json-valid@2.13.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid
edpm - installing lru-cache@4.0.0 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache
edpm - installing async@1.5.2 into node_modules/request-promise/node_modules/request/node_modules/form-data/node_modules/async
edpm - resolving core-util-is@~1.0.0
edpm - resolving inherits@~2.0.1
edpm - resolving isarray@~1.0.0
edpm - resolving process-nextick-args@~1.0.6
edpm - resolving string_decoder@~0.10.x
edpm - resolving util-deprecate@~1.0.1
edpm - fetching readable-stream@2.0.6 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream
edpm - fetching assert-plus@0.2.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/assert-plus
edpm - resolving asn1@>=0.2.3 <0.3.0
edpm - resolving assert-plus@>=0.2.0 <0.3.0
edpm - resolving dashdash@>=1.10.1 <2.0.0
edpm - resolving jsbn@>=0.1.0 <0.2.0
edpm - resolving tweetnacl@>=0.13.0 <1.0.0
edpm - resolving jodid25519@>=1.0.0 <2.0.0
edpm - resolving ecc-jsbn@>=0.0.1 <1.0.0
edpm - fetching sshpk@1.7.4 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk
edpm - resolving extsprintf@1.0.2
edpm - resolving json-schema@0.2.2
edpm - resolving verror@1.3.6
edpm - fetching jsprim@1.2.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim
edpm - resolving pinkie@^2.0.0
edpm - fetching pinkie-promise@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise
edpm - resolving graceful-readlink@>= 1.0.0
edpm - fetching commander@2.9.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/commander
edpm - resolving ansi-styles@^2.1.0
edpm - resolving escape-string-regexp@^1.0.2
edpm - resolving has-ansi@^2.0.0
edpm - resolving strip-ansi@^3.0.0
edpm - resolving supports-color@^2.0.0
edpm - fetching chalk@1.1.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk
edpm - resolving generate-function@^2.0.0
edpm - resolving generate-object-property@^1.1.0
edpm - resolving jsonpointer@2.0.0
edpm - resolving xtend@^4.0.0
edpm - fetching is-my-json-valid@2.13.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid
edpm - installing boom@2.10.1 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/boom
edpm - installing cryptiles@2.0.5 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/cryptiles
edpm - installing sntp@1.0.9 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/sntp
edpm - installing hoek@2.16.3 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/hoek
edpm - installing mime-db@1.22.0 into node_modules/request-promise/node_modules/request/node_modules/mime-types/node_modules/mime-db
edpm - resolving pseudomap@^1.0.1
edpm - resolving yallist@^2.0.0
edpm - fetching lru-cache@4.0.0 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache
edpm - fetching async@1.5.2 into node_modules/request-promise/node_modules/request/node_modules/form-data/node_modules/async
edpm - resolving boom@2.x.x
edpm - fetching cryptiles@2.0.5 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/cryptiles
edpm - resolving hoek@2.x.x
edpm - fetching boom@2.10.1 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/boom
edpm - fetching hoek@2.16.3 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/hoek
edpm - resolving hoek@2.x.x
edpm - fetching sntp@1.0.9 into node_modules/request-promise/node_modules/request/node_modules/hawk/node_modules/sntp
edpm - fetching mime-db@1.22.0 into node_modules/request-promise/node_modules/request/node_modules/mime-types/node_modules/mime-db
edpm - installing pinkie@2.0.4 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise/node_modules/pinkie
edpm - installing graceful-readlink@1.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/commander/node_modules/graceful-readlink
edpm - fetching pinkie@2.0.4 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise/node_modules/pinkie
edpm - installing yallist@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache/node_modules/yallist
edpm - installing pseudomap@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache/node_modules/pseudomap
edpm - installing jodid25519@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jodid25519
edpm - installing jsbn@0.1.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jsbn
edpm - installing ecc-jsbn@0.1.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/ecc-jsbn
edpm - installing dashdash@1.13.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash
edpm - installing asn1@0.2.3 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/asn1
edpm - installing tweetnacl@0.14.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/tweetnacl
edpm - installing strip-ansi@3.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/strip-ansi
edpm - installing supports-color@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/supports-color
edpm - installing has-ansi@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/has-ansi
edpm - installing escape-string-regexp@1.0.5 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/escape-string-regexp
edpm - installing ansi-styles@2.2.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/ansi-styles
edpm - fetching graceful-readlink@1.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/commander/node_modules/graceful-readlink
edpm - installing generate-function@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-function
edpm - installing generate-object-property@1.2.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property
edpm - installing jsonpointer@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/jsonpointer
edpm - installing xtend@4.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/xtend
edpm - fetching yallist@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache/node_modules/yallist
edpm - fetching pseudomap@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/aws4/node_modules/lru-cache/node_modules/pseudomap
edpm - resolving jsbn@~0.1.0
edpm - fetching jodid25519@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jodid25519
edpm - fetching jsbn@0.1.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jsbn
edpm - resolving jsbn@~0.1.0
edpm - fetching ecc-jsbn@0.1.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/ecc-jsbn
edpm - resolving assert-plus@^1.0.0
edpm - fetching dashdash@1.13.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash
edpm - fetching asn1@0.2.3 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/asn1
edpm - fetching tweetnacl@0.14.1 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/tweetnacl
edpm - resolving ansi-regex@^2.0.0
edpm - fetching strip-ansi@3.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/strip-ansi
edpm - fetching supports-color@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/supports-color
edpm - resolving ansi-regex@^2.0.0
edpm - fetching has-ansi@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/has-ansi
edpm - fetching escape-string-regexp@1.0.5 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/escape-string-regexp
edpm - resolving color-convert@^1.0.0
edpm - fetching ansi-styles@2.2.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/ansi-styles
edpm - fetching generate-function@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-function
edpm - resolving is-property@^1.0.0
edpm - fetching generate-object-property@1.2.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property
edpm - fetching jsonpointer@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/jsonpointer
edpm - fetching xtend@4.0.1 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/xtend
edpm - installing ansi-regex@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/strip-ansi/node_modules/ansi-regex
edpm - installing assert-plus@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash/node_modules/assert-plus
edpm - installing ansi-regex@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/has-ansi/node_modules/ansi-regex
edpm - installing is-property@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/node_modules/is-property
edpm - installing color-convert@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/ansi-styles/node_modules/color-convert
edpm - fetching ansi-regex@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/strip-ansi/node_modules/ansi-regex
edpm - fetching assert-plus@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash/node_modules/assert-plus
edpm - fetching ansi-regex@2.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/has-ansi/node_modules/ansi-regex
edpm - fetching is-property@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/node_modules/is-property
edpm - fetching color-convert@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/har-validator/node_modules/chalk/node_modules/ansi-styles/node_modules/color-convert
edpm - installing verror@1.3.6 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/verror
edpm - installing json-schema@0.2.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/json-schema
edpm - installing extsprintf@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/extsprintf
edpm - installing isarray@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/isarray
edpm - installing process-nextick-args@1.0.6 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/process-nextick-args
edpm - installing string_decoder@0.10.31 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/string_decoder
edpm - installing core-util-is@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/core-util-is
edpm - installing inherits@2.0.1 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/inherits
edpm - installing util-deprecate@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/util-deprecate
edpm - resolving extsprintf@1.0.2
edpm - fetching verror@1.3.6 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/verror
edpm - fetching json-schema@0.2.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/json-schema
edpm - fetching extsprintf@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/extsprintf
edpm - fetching isarray@1.0.0 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/isarray
edpm - fetching process-nextick-args@1.0.6 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/process-nextick-args
edpm - fetching string_decoder@0.10.31 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/string_decoder
edpm - fetching core-util-is@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/core-util-is
edpm - fetching inherits@2.0.1 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/inherits
edpm - fetching util-deprecate@1.0.2 into node_modules/request-promise/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/util-deprecate
Successfully installed.
```
