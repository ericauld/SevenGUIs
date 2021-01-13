["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/htmlelement.js"],"~:js","goog.provide(\"goog.dom.HtmlElement\");\ngoog.dom.HtmlElement = function() {\n};\n","~:source","// Copyright 2017 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.dom.HtmlElement');\n\n\n\n/**\n * This subclass of HTMLElement is used when only a HTMLElement is possible and\n * not any of its subclasses. Normally, a type can refer to an instance of\n * itself or an instance of any subtype. More concretely, if HTMLElement is used\n * then the compiler must assume that it might still be e.g. HTMLScriptElement.\n * With this, the type check knows that it couldn't be any special element.\n *\n * @constructor\n * @extends {HTMLElement}\n */\ngoog.dom.HtmlElement = function() {};\n","~:compiled-at",1610389924520,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.htmlelement.js\",\n\"lineCount\":4,\n\"mappings\":\"AAcAA,IAAA,CAAKC,OAAL,CAAa,sBAAb,CAAA;AAcAD,IAAA,CAAKE,GAAL,CAASC,WAAT,GAAuBC,QAAQ,EAAG;CAAlC;;\",\n\"sources\":[\"goog/dom/htmlelement.js\"],\n\"sourcesContent\":[\"// Copyright 2017 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.dom.HtmlElement');\\n\\n\\n\\n/**\\n * This subclass of HTMLElement is used when only a HTMLElement is possible and\\n * not any of its subclasses. Normally, a type can refer to an instance of\\n * itself or an instance of any subtype. More concretely, if HTMLElement is used\\n * then the compiler must assume that it might still be e.g. HTMLScriptElement.\\n * With this, the type check knows that it couldn't be any special element.\\n *\\n * @constructor\\n * @extends {HTMLElement}\\n */\\ngoog.dom.HtmlElement = function() {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"dom\",\"HtmlElement\",\"goog.dom.HtmlElement\"]\n}\n"]