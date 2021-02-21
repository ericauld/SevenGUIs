["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/stringbuffer.js"],"~:js","goog.provide(\"goog.string.StringBuffer\");\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\ngoog.string.StringBuffer.prototype.buffer_ = \"\";\ngoog.string.StringBuffer.prototype.set = function(s) {\n  this.buffer_ = \"\" + s;\n};\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {\n    for (var i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\ngoog.string.StringBuffer.prototype.clear = function() {\n  this.buffer_ = \"\";\n};\ngoog.string.StringBuffer.prototype.getLength = function() {\n  return this.buffer_.length;\n};\ngoog.string.StringBuffer.prototype.toString = function() {\n  return this.buffer_;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Utility for fast string concatenation.\n */\n\ngoog.provide('goog.string.StringBuffer');\n\n\n\n/**\n * Utility class to facilitate string concatenation.\n *\n * @param {*=} opt_a1 Optional first initial item to append.\n * @param {...*} var_args Other initial items to\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\n * @constructor\n */\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\n\n\n/**\n * Internal buffer for the string to be concatenated.\n * @type {string}\n * @private\n */\ngoog.string.StringBuffer.prototype.buffer_ = '';\n\n\n/**\n * Sets the contents of the string buffer object, replacing what's currently\n * there.\n *\n * @param {*} s String to set.\n */\ngoog.string.StringBuffer.prototype.set = function(s) {\n  this.buffer_ = '' + s;\n};\n\n\n/**\n * Appends one or more items to the buffer.\n *\n * Calling this with null, undefined, or empty arguments is an error.\n *\n * @param {*} a1 Required first string.\n * @param {*=} opt_a2 Optional second string.\n * @param {...?} var_args Other items to append,\n *     e.g., sb.append('foo', 'bar', 'baz').\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\n * @suppress {duplicate}\n */\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\n    for (let i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\n\n\n/**\n * Clears the internal buffer.\n */\ngoog.string.StringBuffer.prototype.clear = function() {\n  this.buffer_ = '';\n};\n\n\n/**\n * @return {number} the length of the current contents of the buffer.\n */\ngoog.string.StringBuffer.prototype.getLength = function() {\n  return this.buffer_.length;\n};\n\n\n/**\n * @return {string} The concatenated string.\n * @override\n */\ngoog.string.StringBuffer.prototype.toString = function() {\n  return this.buffer_;\n};\n","~:compiled-at",1613778546568,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.stringbuffer.js\",\n\"lineCount\":29,\n\"mappings\":\"AAkBAA,IAAA,CAAKC,OAAL,CAAa,0BAAb,CAAA;AAYAD,IAAA,CAAKE,MAAL,CAAYC,YAAZ,GAA2BC,QAAQ,CAACC,MAAD,EAASC,QAAT,CAAmB;AACpD,MAAID,MAAJ,IAAc,IAAd;AACE,QAAA,CAAKE,MAAL,CAAYC,KAAZ,CAAkB,IAAlB,EAAwBC,SAAxB,CAAA;AADF;AADoD,CAAtD;AAYAT,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCC,OAAnC,GAA6C,EAA7C;AASAX,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCE,GAAnC,GAAyCC,QAAQ,CAACC,CAAD,CAAI;AACnD,MAAA,CAAKH,OAAL,GAAe,EAAf,GAAoBG,CAApB;AADmD,CAArD;AAiBAd,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCH,MAAnC,GAA4CQ,QAAQ,CAACC,EAAD,EAAKC,MAAL,EAAaX,QAAb,CAAuB;AAEzE,MAAA,CAAKK,OAAL,IAAgBO,MAAA,CAAOF,EAAP,CAAhB;AACA,MAAIC,MAAJ,IAAc,IAAd;AACE,SAAK,IAAIE,IAAI,CAAb,EAAgBA,CAAhB,GAAoBV,SAApB,CAA8BW,MAA9B,EAAsCD,CAAA,EAAtC;AACE,UAAA,CAAKR,OAAL,IAAgBF,SAAA,CAAUU,CAAV,CAAhB;AADF;AADF;AAKA,SAAO,IAAP;AARyE,CAA3E;AAeAnB,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCW,KAAnC,GAA2CC,QAAQ,EAAG;AACpD,MAAA,CAAKX,OAAL,GAAe,EAAf;AADoD,CAAtD;AAQAX,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCa,SAAnC,GAA+CC,QAAQ,EAAG;AACxD,SAAO,IAAP,CAAYb,OAAZ,CAAoBS,MAApB;AADwD,CAA1D;AASApB,IAAA,CAAKE,MAAL,CAAYC,YAAZ,CAAyBO,SAAzB,CAAmCe,QAAnC,GAA8CC,QAAQ,EAAG;AACvD,SAAO,IAAP,CAAYf,OAAZ;AADuD,CAAzD;;\",\n\"sources\":[\"goog/string/stringbuffer.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Utility for fast string concatenation.\\n */\\n\\ngoog.provide('goog.string.StringBuffer');\\n\\n\\n\\n/**\\n * Utility class to facilitate string concatenation.\\n *\\n * @param {*=} opt_a1 Optional first initial item to append.\\n * @param {...*} var_args Other initial items to\\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\\n * @constructor\\n */\\ngoog.string.StringBuffer = function(opt_a1, var_args) {\\n  if (opt_a1 != null) {\\n    this.append.apply(this, arguments);\\n  }\\n};\\n\\n\\n/**\\n * Internal buffer for the string to be concatenated.\\n * @type {string}\\n * @private\\n */\\ngoog.string.StringBuffer.prototype.buffer_ = '';\\n\\n\\n/**\\n * Sets the contents of the string buffer object, replacing what's currently\\n * there.\\n *\\n * @param {*} s String to set.\\n */\\ngoog.string.StringBuffer.prototype.set = function(s) {\\n  this.buffer_ = '' + s;\\n};\\n\\n\\n/**\\n * Appends one or more items to the buffer.\\n *\\n * Calling this with null, undefined, or empty arguments is an error.\\n *\\n * @param {*} a1 Required first string.\\n * @param {*=} opt_a2 Optional second string.\\n * @param {...?} var_args Other items to append,\\n *     e.g., sb.append('foo', 'bar', 'baz').\\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\\n * @suppress {duplicate}\\n */\\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\\n  this.buffer_ += String(a1);\\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\\n    for (let i = 1; i < arguments.length; i++) {\\n      this.buffer_ += arguments[i];\\n    }\\n  }\\n  return this;\\n};\\n\\n\\n/**\\n * Clears the internal buffer.\\n */\\ngoog.string.StringBuffer.prototype.clear = function() {\\n  this.buffer_ = '';\\n};\\n\\n\\n/**\\n * @return {number} the length of the current contents of the buffer.\\n */\\ngoog.string.StringBuffer.prototype.getLength = function() {\\n  return this.buffer_.length;\\n};\\n\\n\\n/**\\n * @return {string} The concatenated string.\\n * @override\\n */\\ngoog.string.StringBuffer.prototype.toString = function() {\\n  return this.buffer_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"StringBuffer\",\"goog.string.StringBuffer\",\"opt_a1\",\"var_args\",\"append\",\"apply\",\"arguments\",\"prototype\",\"buffer_\",\"set\",\"goog.string.StringBuffer.prototype.set\",\"s\",\"goog.string.StringBuffer.prototype.append\",\"a1\",\"opt_a2\",\"String\",\"i\",\"length\",\"clear\",\"goog.string.StringBuffer.prototype.clear\",\"getLength\",\"goog.string.StringBuffer.prototype.getLength\",\"toString\",\"goog.string.StringBuffer.prototype.toString\"]\n}\n"]