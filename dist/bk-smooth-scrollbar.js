var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var fails$j = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$i = fails$j;
var functionBindNative = !fails$i(function() {
  var test2 = (function() {
  }).bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var call$c = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$1.bind.bind(call$c, call$c);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$c.apply(fn, arguments);
  };
};
var uncurryThis$o = functionUncurryThis;
var toString$5 = uncurryThis$o({}.toString);
var stringSlice$2 = uncurryThis$o("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$2(toString$5(it), 8, -1);
};
var uncurryThis$n = functionUncurryThis;
var fails$h = fails$j;
var classof$8 = classofRaw$2;
var $Object$5 = Object;
var split = uncurryThis$n("".split);
var indexedObject = fails$h(function() {
  return !$Object$5("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$8(it) === "String" ? split(it, "") : $Object$5(it);
} : $Object$5;
var isNullOrUndefined$6 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$5 = isNullOrUndefined$6;
var $TypeError$a = TypeError;
var requireObjectCoercible$5 = function(it) {
  if (isNullOrUndefined$5(it))
    throw new $TypeError$a("Can't call method on " + it);
  return it;
};
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$5;
var toIndexedObject$6 = function(it) {
  return IndexedObject$2(requireObjectCoercible$4(it));
};
var check = function(it) {
  return it && it.Math === Math && it;
};
var global$d = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
);
var sharedStore = { exports: {} };
var global$c = global$d;
var defineProperty$7 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$7(global$c, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$c[key] = value;
  }
  return value;
};
var globalThis$1 = global$d;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: "3.37.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedStoreExports = sharedStore.exports;
var store$2 = sharedStoreExports;
var shared$3 = function(key, value) {
  return store$2[key] || (store$2[key] = value || {});
};
var requireObjectCoercible$3 = requireObjectCoercible$5;
var $Object$4 = Object;
var toObject$5 = function(argument) {
  return $Object$4(requireObjectCoercible$3(argument));
};
var uncurryThis$m = functionUncurryThis;
var toObject$4 = toObject$5;
var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};
var uncurryThis$l = functionUncurryThis;
var id$2 = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$l(1 .toString);
var uid$3 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$4(++id$2 + postfix, 36);
};
var engineUserAgent = typeof navigator != "undefined" && String(navigator.userAgent) || "";
var global$b = global$d;
var userAgent = engineUserAgent;
var process = global$b.process;
var Deno = global$b.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION = engineV8Version;
var fails$g = fails$j;
var global$a = global$d;
var $String$5 = global$a.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$g(function() {
  var symbol = Symbol("symbol detection");
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var global$9 = global$d;
var shared$2 = shared$3;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Symbol$1 = global$9.Symbol;
var WellKnownSymbolsStore = shared$2("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;
var wellKnownSymbol$c = function(name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};
var documentAll = typeof document == "object" && document.all;
var isCallable$h = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
  return typeof argument == "function" || argument === documentAll;
} : function(argument) {
  return typeof argument == "function";
};
var isCallable$g = isCallable$h;
var isObject$f = function(it) {
  return typeof it == "object" ? it !== null : isCallable$g(it);
};
var isObject$e = isObject$f;
var $String$4 = String;
var $TypeError$9 = TypeError;
var anObject$a = function(argument) {
  if (isObject$e(argument))
    return argument;
  throw new $TypeError$9($String$4(argument) + " is not an object");
};
var objectDefineProperties = {};
var fails$f = fails$j;
var descriptors = !fails$f(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var DESCRIPTORS$c = descriptors;
var fails$e = fails$j;
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$e(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var objectDefineProperty = {};
var global$8 = global$d;
var isObject$d = isObject$f;
var document$1 = global$8.document;
var EXISTS$1 = isObject$d(document$1) && isObject$d(document$1.createElement);
var documentCreateElement$1 = function(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$b = descriptors;
var fails$d = fails$j;
var createElement = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$b && !fails$d(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var NATIVE_BIND$1 = functionBindNative;
var call$b = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$b.bind(call$b) : function() {
  return call$b.apply(call$b, arguments);
};
var global$7 = global$d;
var isCallable$f = isCallable$h;
var aFunction = function(argument) {
  return isCallable$f(argument) ? argument : void 0;
};
var getBuiltIn$6 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$7[namespace]) : global$7[namespace] && global$7[namespace][method];
};
var uncurryThis$k = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$k({}.isPrototypeOf);
var getBuiltIn$5 = getBuiltIn$6;
var isCallable$e = isCallable$h;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$2 = USE_SYMBOL_AS_UID ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$5("Symbol");
  return isCallable$e($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};
var $String$3 = String;
var tryToString$3 = function(argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$d = isCallable$h;
var tryToString$2 = tryToString$3;
var $TypeError$8 = TypeError;
var aCallable$6 = function(argument) {
  if (isCallable$d(argument))
    return argument;
  throw new $TypeError$8(tryToString$2(argument) + " is not a function");
};
var aCallable$5 = aCallable$6;
var isNullOrUndefined$4 = isNullOrUndefined$6;
var getMethod$3 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? void 0 : aCallable$5(func);
};
var call$a = functionCall;
var isCallable$c = isCallable$h;
var isObject$c = isObject$f;
var $TypeError$7 = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$c(fn = input.toString) && !isObject$c(val = call$a(fn, input)))
    return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$c(val = call$a(fn, input)))
    return val;
  if (pref !== "string" && isCallable$c(fn = input.toString) && !isObject$c(val = call$a(fn, input)))
    return val;
  throw new $TypeError$7("Can't convert object to primitive value");
};
var call$9 = functionCall;
var isObject$b = isObject$f;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$c;
var $TypeError$6 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$b("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$b(input) || isSymbol$1(input))
    return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$9(exoticToPrim, input, pref);
    if (!isObject$b(result) || isSymbol$1(result))
      return result;
    throw new $TypeError$6("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol(key) ? key : key + "";
};
var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$2;
var $TypeError$5 = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (IE8_DOM_DEFINE$1)
    try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw new $TypeError$5("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$4 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$1 = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$1 = function(index2, length) {
  var integer = toIntegerOrInfinity$3(index2);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min = Math.min;
var toLength$1 = function(argument) {
  var len = toIntegerOrInfinity$2(argument);
  return len > 0 ? min(len, 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$4 = function(obj) {
  return toLength(obj.length);
};
var toIndexedObject$5 = toIndexedObject$6;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var createMethod$2 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$3(O);
    if (length === 0)
      return !IS_INCLUDES && -1;
    var index2 = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el)
      while (length > index2) {
        value = O[index2++];
        if (value !== value)
          return true;
      }
    else
      for (; length > index2; index2++) {
        if ((IS_INCLUDES || index2 in O) && O[index2] === el)
          return IS_INCLUDES || index2 || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};
var hiddenKeys$5 = {};
var uncurryThis$j = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$6;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$5;
var push$2 = uncurryThis$j([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$9(hiddenKeys$4, key) && hasOwn$9(O, key) && push$2(result, key);
  while (names.length > i)
    if (hasOwn$9(O, key = names[i++])) {
      ~indexOf(result, key) || push$2(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};
var DESCRIPTORS$9 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$8 = anObject$a;
var toIndexedObject$3 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$9 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$3(Properties);
  var keys3 = objectKeys$1(Properties);
  var length = keys3.length;
  var index2 = 0;
  var key;
  while (length > index2)
    definePropertyModule$4.f(O, key = keys3[index2++], props[key]);
  return O;
};
var getBuiltIn$4 = getBuiltIn$6;
var html$1 = getBuiltIn$4("document", "documentElement");
var shared$1 = shared$3;
var uid$1 = uid$3;
var keys$1 = shared$1("keys");
var sharedKey$3 = function(key) {
  return keys$1[key] || (keys$1[key] = uid$1(key));
};
var anObject$7 = anObject$a;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$3 = hiddenKeys$5;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$2 = sharedKey$3;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$2("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys$1.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};
hiddenKeys$3[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var wellKnownSymbol$a = wellKnownSymbol$c;
var create$2 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$a("unscopables");
var ArrayPrototype$1 = Array.prototype;
if (ArrayPrototype$1[UNSCOPABLES] === void 0) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}
var addToUnscopables$1 = function(key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};
var iterators = {};
var global$6 = global$d;
var isCallable$b = isCallable$h;
var WeakMap$2 = global$6.WeakMap;
var weakMapBasicDetection = isCallable$b(WeakMap$2) && /native code/.test(String(WeakMap$2));
var createPropertyDescriptor$4 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var DESCRIPTORS$8 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var createNonEnumerableProperty$3 = DESCRIPTORS$8 ? function(object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
var global$5 = global$d;
var isObject$a = isObject$f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$8 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$2 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$1 = global$5.TypeError;
var WeakMap$1 = global$5.WeakMap;
var set$1, get$1, has$7;
var enforce = function(it) {
  return has$7(it) ? get$1(it) : set$1(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$a(it) || (state = get$1(it)).type !== TYPE) {
      throw new TypeError$1("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP$1 || shared.state) {
  var store$1 = shared.state || (shared.state = new WeakMap$1());
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  set$1 = function(it, metadata) {
    if (store$1.has(it))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return store$1.get(it) || {};
  };
  has$7 = function(it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1("state");
  hiddenKeys$2[STATE] = true;
  set$1 = function(it, metadata) {
    if (hasOwn$8(it, STATE))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return hasOwn$8(it, STATE) ? it[STATE] : {};
  };
  has$7 = function(it) {
    return hasOwn$8(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get: get$1,
  has: has$7,
  enforce,
  getterFor
};
var objectGetOwnPropertyDescriptor = {};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var DESCRIPTORS$7 = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var toIndexedObject$2 = toIndexedObject$6;
var toPropertyKey = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE)
    try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
  if (hasOwn$7(O, P))
    return createPropertyDescriptor$2(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$6 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$6(FunctionPrototype, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || DESCRIPTORS$6 && getDescriptor(FunctionPrototype, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$i = functionUncurryThis;
var isCallable$a = isCallable$h;
var store = sharedStoreExports;
var functionToString = uncurryThis$i(Function.toString);
if (!isCallable$a(store.inspectSource)) {
  store.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store.inspectSource;
var uncurryThis$h = functionUncurryThis;
var fails$c = fails$j;
var isCallable$9 = isCallable$h;
var hasOwn$5 = hasOwnProperty_1;
var DESCRIPTORS$5 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$4 = internalState;
var enforceInternalState$1 = InternalStateModule$4.enforce;
var getInternalState$2 = InternalStateModule$4.get;
var $String$2 = String;
var defineProperty$5 = Object.defineProperty;
var stringSlice$1 = uncurryThis$h("".slice);
var replace = uncurryThis$h("".replace);
var join = uncurryThis$h([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$c(function() {
  return defineProperty$5(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === "Symbol(") {
    name = "[" + replace($String$2(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$5(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$5)
      defineProperty$5(value, "name", { value: name, configurable: true });
    else
      value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, "arity") && value.length !== options.arity) {
    defineProperty$5(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$5(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$5)
        defineProperty$5(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState$1(value);
  if (!hasOwn$5(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$9(this) && getInternalState$2(this).source || inspectSource$1(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$8 = isCallable$h;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$6 = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$8(value))
    makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe)
        delete O[key];
      else if (O[key])
        simple = true;
    } catch (error) {
    }
    if (simple)
      O[key] = value;
    else
      definePropertyModule$2.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$3 = getBuiltIn$6;
var uncurryThis$g = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$6 = anObject$a;
var concat$1 = uncurryThis$g([].concat);
var ownKeys$1 = getBuiltIn$3("Reflect", "ownKeys") || function ownKeys(it) {
  var keys3 = getOwnPropertyNamesModule$1.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys3, getOwnPropertySymbols(it)) : keys3;
};
var hasOwn$4 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys3 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$1.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys3.length; i++) {
    var key = keys3[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$b = fails$j;
var isCallable$7 = isCallable$h;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$7(detection) ? fails$b(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var global$4 = global$d;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var defineBuiltIn$5 = defineBuiltIn$6;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global$4[TARGET] && global$4[TARGET].prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$1(sourceProperty, "sham", true);
      }
      defineBuiltIn$5(target, key, sourceProperty, options);
    }
};
var fails$a = fails$j;
var correctPrototypeGetter = !fails$a(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$3 = hasOwnProperty_1;
var isCallable$6 = isCallable$h;
var toObject$3 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object$2 = Object;
var ObjectPrototype = $Object$2.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$2.getPrototypeOf : function(O) {
  var object = toObject$3(O);
  if (hasOwn$3(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$6(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object$2 ? ObjectPrototype : null;
};
var fails$9 = fails$j;
var isCallable$5 = isCallable$h;
var isObject$9 = isObject$f;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$9 = wellKnownSymbol$c;
var ITERATOR$4 = wellKnownSymbol$9("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$2) || fails$9(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$4].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$5(IteratorPrototype$2[ITERATOR$4])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$4, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var defineProperty$4 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$8 = wellKnownSymbol$c;
var TO_STRING_TAG$2 = wellKnownSymbol$8("toStringTag");
var setToStringTag$3 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$2)) {
    defineProperty$4(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME, next3, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME + " Iterator";
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next3) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$4[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var uncurryThis$f = functionUncurryThis;
var aCallable$4 = aCallable$6;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$f(aCallable$4(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var isObject$8 = isObject$f;
var isPossiblePrototype$1 = function(argument) {
  return isObject$8(argument) || argument === null;
};
var isPossiblePrototype = isPossiblePrototype$1;
var $String$1 = String;
var $TypeError$4 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (isPossiblePrototype(argument))
    return argument;
  throw new $TypeError$4("Can't set " + $String$1(argument) + " as a prototype");
};
var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var isObject$7 = isObject$f;
var requireObjectCoercible$2 = requireObjectCoercible$5;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor$1(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    requireObjectCoercible$2(O);
    aPossiblePrototype(proto);
    if (!isObject$7(O))
      return O;
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $$c = _export;
var call$7 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$h;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$7 = wellKnownSymbol$c;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$7("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME, IteratorConstructor, next3, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next3);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys3() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$3])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$7(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$c({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;
  return methods;
};
var createIterResultObject$3 = function(value, done) {
  return { value, done };
};
var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var DESCRIPTORS$4 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);
defineIterator$2(Array, "Array", function(iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState$1(this);
  var target = state.target;
  var index2 = state.index++;
  if (!target || index2 >= target.length) {
    state.target = void 0;
    return createIterResultObject$2(void 0, true);
  }
  switch (state.kind) {
    case "keys":
      return createIterResultObject$2(index2, false);
    case "values":
      return createIterResultObject$2(target[index2], false);
  }
  return createIterResultObject$2([index2, target[index2]], false);
}, "values");
var values = Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
if (DESCRIPTORS$4 && values.name !== "values")
  try {
    defineProperty$3(values, "name", { value: "values" });
  } catch (error) {
  }
var internalMetadata = { exports: {} };
var objectGetOwnPropertyNamesExternal = {};
var uncurryThis$e = functionUncurryThis;
var arraySlice$1 = uncurryThis$e([].slice);
var classof$7 = classofRaw$2;
var toIndexedObject = toIndexedObject$6;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice = arraySlice$1;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$7(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};
var fails$8 = fails$j;
var arrayBufferNonExtensible = fails$8(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$7 = fails$j;
var isObject$6 = isObject$f;
var classof$6 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$7(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$6(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$6(it) === "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$6 = fails$j;
var freezing = !fails$6(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$b = _export;
var uncurryThis$d = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$5 = isObject$f;
var hasOwn$1 = hasOwnProperty_1;
var defineProperty$2 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible$1 = objectIsExtensible;
var uid = uid$3;
var FREEZING$1 = freezing;
var REQUIRED = false;
var METADATA = uid("meta");
var id$1 = 0;
var setMetadata = function(it) {
  defineProperty$2(it, METADATA, { value: {
    objectID: "O" + id$1++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create3) {
  if (!isObject$5(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible$1(it))
      return "F";
    if (!create3)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData$1 = function(it, create3) {
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible$1(it))
      return true;
    if (!create3)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING$1 && REQUIRED && isExtensible$1(it) && !hasOwn$1(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames3 = getOwnPropertyNamesModule.f;
  var splice2 = uncurryThis$d([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames3(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames3(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice2(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$b({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData$1,
  onFreeze
};
hiddenKeys[METADATA] = true;
var internalMetadataExports = internalMetadata.exports;
var classofRaw$1 = classofRaw$2;
var uncurryThis$c = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw$1(fn) === "Function")
    return uncurryThis$c(fn);
};
var uncurryThis$b = functionUncurryThisClause;
var aCallable$3 = aCallable$6;
var NATIVE_BIND = functionBindNative;
var bind$4 = uncurryThis$b(uncurryThis$b.bind);
var functionBindContext = function(fn, that) {
  aCallable$3(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$4(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var wellKnownSymbol$6 = wellKnownSymbol$c;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$6("iterator");
var ArrayPrototype = Array.prototype;
var isArrayIteratorMethod$2 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};
var wellKnownSymbol$5 = wellKnownSymbol$c;
var TO_STRING_TAG$1 = wellKnownSymbol$5("toStringTag");
var test = {};
test[TO_STRING_TAG$1] = "z";
var toStringTagSupport = String(test) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$3 = isCallable$h;
var classofRaw = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$c;
var TO_STRING_TAG = wellKnownSymbol$4("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable$3(O.callee) ? "Arguments" : result;
};
var classof$4 = classof$5;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$3 = wellKnownSymbol$c;
var ITERATOR$1 = wellKnownSymbol$3("iterator");
var getIteratorMethod$3 = function(it) {
  if (!isNullOrUndefined$3(it))
    return getMethod$1(it, ITERATOR$1) || getMethod$1(it, "@@iterator") || Iterators[classof$4(it)];
};
var call$6 = functionCall;
var aCallable$2 = aCallable$6;
var anObject$5 = anObject$a;
var tryToString$1 = tryToString$3;
var getIteratorMethod$2 = getIteratorMethod$3;
var $TypeError$3 = TypeError;
var getIterator$2 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$2(iteratorMethod))
    return anObject$5(call$6(iteratorMethod, argument));
  throw new $TypeError$3(tryToString$1(argument) + " is not iterable");
};
var call$5 = functionCall;
var anObject$4 = anObject$a;
var getMethod = getMethod$3;
var iteratorClose$4 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod(iterator, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$5(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$4(innerResult);
  return value;
};
var bind$3 = functionBindContext;
var call$4 = functionCall;
var anObject$3 = anObject$a;
var tryToString = tryToString$3;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var iteratorClose$3 = iteratorClose$4;
var $TypeError$2 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$6 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index2, length, result, next3, step;
  var stop = function(condition) {
    if (iterator)
      iteratorClose$3(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$1(iterable);
    if (!iterFn)
      throw new $TypeError$2(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index2 = 0, length = lengthOfArrayLike$2(iterable); length > index2; index2++) {
        result = callFn(iterable[index2]);
        if (result && isPrototypeOf$1(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator = getIterator$1(iterable, iterFn);
  }
  next3 = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$4(next3, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$3(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf$1(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var isPrototypeOf = objectIsPrototypeOf;
var $TypeError$1 = TypeError;
var anInstance$3 = function(it, Prototype) {
  if (isPrototypeOf(Prototype, it))
    return it;
  throw new $TypeError$1("Incorrect invocation");
};
var wellKnownSymbol$2 = wellKnownSymbol$c;
var ITERATOR = wellKnownSymbol$2("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var checkCorrectnessOfIteration$2 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var isCallable$2 = isCallable$h;
var isObject$4 = isObject$f;
var setPrototypeOf = objectSetPrototypeOf;
var inheritIfRequired$1 = function($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$4(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
  )
    setPrototypeOf($this, NewTargetPrototype);
  return $this;
};
var $$a = _export;
var global$3 = global$d;
var uncurryThis$a = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$2 = defineBuiltIn$6;
var InternalMetadataModule$1 = internalMetadataExports;
var iterate$5 = iterate$6;
var anInstance$2 = anInstance$3;
var isCallable$1 = isCallable$h;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var isObject$3 = isObject$f;
var fails$5 = fails$j;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var setToStringTag = setToStringTag$3;
var inheritIfRequired = inheritIfRequired$1;
var collection$3 = function(CONSTRUCTOR_NAME, wrapper2, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global$3[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function(KEY) {
    var uncurriedNativeMethod = uncurryThis$a(NativePrototype[KEY]);
    defineBuiltIn$2(
      NativePrototype,
      KEY,
      KEY === "add" ? function add2(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === "delete" ? function(key) {
        return IS_WEAK && !isObject$3(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "get" ? function get2(key) {
        return IS_WEAK && !isObject$3(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "has" ? function has2(key) {
        return IS_WEAK && !isObject$3(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set2(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };
  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable$1(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$5(function() {
      new NativeConstructor().entries().next();
    }))
  );
  if (REPLACE) {
    Constructor = common.getConstructor(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule$1.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    var THROWS_ON_PRIMITIVES = fails$5(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function(iterable) {
      new NativeConstructor(iterable);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$5(function() {
      var $instance = new NativeConstructor();
      var index2 = 5;
      while (index2--)
        $instance[ADDER](index2, index2);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper2(function(dummy, iterable) {
        anInstance$2(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$2(iterable))
          iterate$5(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && NativePrototype.clear)
      delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$a({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK)
    common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;
var defineBuiltInAccessor$2 = function(target, name, descriptor) {
  if (descriptor.get)
    makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set)
    makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};
var defineBuiltIn$1 = defineBuiltIn$6;
var defineBuiltIns$3 = function(target, src, options) {
  for (var key in src)
    defineBuiltIn$1(target, key, src[key], options);
  return target;
};
var getBuiltIn$2 = getBuiltIn$6;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
var wellKnownSymbol$1 = wellKnownSymbol$c;
var DESCRIPTORS$3 = descriptors;
var SPECIES$1 = wellKnownSymbol$1("species");
var setSpecies$1 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$1]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$1, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var create2 = objectCreate;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
var defineBuiltIns$2 = defineBuiltIns$3;
var bind$2 = functionBindContext;
var anInstance$1 = anInstance$3;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var iterate$4 = iterate$6;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;
var setSpecies = setSpecies$1;
var DESCRIPTORS$2 = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule$2 = internalState;
var setInternalState$2 = InternalStateModule$2.set;
var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
var collectionStrong$2 = {
  getConstructor: function(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper2(function(that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: create2(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS$2)
        that.size = 0;
      if (!isNullOrUndefined$1(iterable))
        iterate$4(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var entry = getEntry(that, key);
      var previous, index2;
      if (entry) {
        entry.value = value;
      } else {
        state.last = entry = {
          index: index2 = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry;
        if (previous)
          previous.next = entry;
        if (DESCRIPTORS$2)
          state.size++;
        else
          that.size++;
        if (index2 !== "F")
          state.index[index2] = entry;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index2 = fastKey(key);
      var entry;
      if (index2 !== "F")
        return state.index[index2];
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key)
          return entry;
      }
    };
    defineBuiltIns$2(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState2(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous)
            entry.previous = entry.previous.next = void 0;
          entry = entry.next;
        }
        state.first = state.last = void 0;
        state.index = create2(null);
        if (DESCRIPTORS$2)
          state.size = 0;
        else
          that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next3 = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev)
            prev.next = next3;
          if (next3)
            next3.previous = prev;
          if (state.first === entry)
            state.first = next3;
          if (state.last === entry)
            state.last = prev;
          if (DESCRIPTORS$2)
            state.size--;
          else
            that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach2(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          while (entry && entry.removed)
            entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns$2(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get2(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set2(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add2(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$2)
      defineBuiltInAccessor(Prototype, "size", {
        configurable: true,
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed)
        entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = void 0;
        return createIterResultObject$1(void 0, true);
      }
      if (kind === "keys")
        return createIterResultObject$1(entry.key, false);
      if (kind === "values")
        return createIterResultObject$1(entry.value, false);
      return createIterResultObject$1([entry.key, entry.value], false);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection$2 = collection$3;
var collectionStrong$1 = collectionStrong$2;
collection$2("Map", function(init) {
  return function Map2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong$1);
var uncurryThis$9 = functionUncurryThis;
var MapPrototype = Map.prototype;
var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map,
  set: uncurryThis$9(MapPrototype.set),
  get: uncurryThis$9(MapPrototype.get),
  has: uncurryThis$9(MapPrototype.has),
  remove: uncurryThis$9(MapPrototype["delete"]),
  proto: MapPrototype
};
var $$9 = _export;
var uncurryThis$8 = functionUncurryThis;
var aCallable$1 = aCallable$6;
var requireObjectCoercible$1 = requireObjectCoercible$5;
var iterate$3 = iterate$6;
var MapHelpers = mapHelpers;
var fails$4 = fails$j;
var Map$1 = MapHelpers.Map;
var has$6 = MapHelpers.has;
var get = MapHelpers.get;
var set = MapHelpers.set;
var push$1 = uncurryThis$8([].push);
var DOES_NOT_WORK_WITH_PRIMITIVES = fails$4(function() {
  return Map$1.groupBy("ab", function(it) {
    return it;
  }).get("a").length !== 1;
});
$$9({ target: "Map", stat: true, forced: DOES_NOT_WORK_WITH_PRIMITIVES }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible$1(items);
    aCallable$1(callbackfn);
    var map = new Map$1();
    var k = 0;
    iterate$3(items, function(value) {
      var key = callbackfn(value, k++);
      if (!has$6(map, key))
        set(map, key, [value]);
      else
        push$1(get(map, key), value);
    });
    return map;
  }
});
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$3 = classof$5;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$3(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn = defineBuiltIn$6;
var toString$3 = objectToString;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, "toString", toString$3, { unsafe: true });
}
var classof$2 = classof$5;
var $String = String;
var toString$2 = function(argument) {
  if (classof$2(argument) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return $String(argument);
};
var uncurryThis$7 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$1 = toString$2;
var requireObjectCoercible = requireObjectCoercible$5;
var charAt$1 = uncurryThis$7("".charAt);
var charCodeAt = uncurryThis$7("".charCodeAt);
var stringSlice = uncurryThis$7("".slice);
var createMethod$1 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity$1(pos);
    var size2 = S.length;
    var first, second;
    if (position < 0 || position >= size2)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size2 || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};
var charAt = stringMultibyte.charAt;
var toString3 = toString$2;
var InternalStateModule$1 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var STRING_ITERATOR = "String Iterator";
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState = InternalStateModule$1.getterFor(STRING_ITERATOR);
defineIterator(String, "String", function(iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString3(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index2 = state.index;
  var point;
  if (index2 >= string.length)
    return createIterResultObject(void 0, true);
  point = charAt(string, index2);
  state.index += point.length;
  return createIterResultObject(point, false);
});
var global$2 = global$d;
var path$5 = global$2;
var path$4 = path$5;
path$4.Map;
var collection$1 = collection$3;
var collectionStrong = collectionStrong$2;
collection$1("Set", function(init) {
  return function Set2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
var uncurryThis$6 = functionUncurryThis;
var SetPrototype$1 = Set.prototype;
var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set,
  add: uncurryThis$6(SetPrototype$1.add),
  has: uncurryThis$6(SetPrototype$1.has),
  remove: uncurryThis$6(SetPrototype$1["delete"]),
  proto: SetPrototype$1
};
var has$5 = setHelpers.has;
var aSet$7 = function(it) {
  has$5(it);
  return it;
};
var call$3 = functionCall;
var iterateSimple$7 = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next3 = record.next;
  var step, result;
  while (!(step = call$3(next3, iterator)).done) {
    result = fn(step.value);
    if (result !== void 0)
      return result;
  }
};
var uncurryThis$5 = functionUncurryThis;
var iterateSimple$6 = iterateSimple$7;
var SetHelpers$5 = setHelpers;
var Set$3 = SetHelpers$5.Set;
var SetPrototype = SetHelpers$5.proto;
var forEach = uncurryThis$5(SetPrototype.forEach);
var keys2 = uncurryThis$5(SetPrototype.keys);
var next2 = keys2(new Set$3()).next;
var setIterate = function(set2, fn, interruptible) {
  return interruptible ? iterateSimple$6({ iterator: keys2(set2), next: next2 }, fn) : forEach(set2, fn);
};
var SetHelpers$4 = setHelpers;
var iterate$2 = setIterate;
var Set$2 = SetHelpers$4.Set;
var add$3 = SetHelpers$4.add;
var setClone = function(set2) {
  var result = new Set$2();
  iterate$2(set2, function(it) {
    add$3(result, it);
  });
  return result;
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var SetHelpers$3 = setHelpers;
var setSize = uncurryThisAccessor(SetHelpers$3.proto, "size", "get") || function(set2) {
  return set2.size;
};
var getIteratorDirect$1 = function(obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};
var aCallable = aCallable$6;
var anObject$2 = anObject$a;
var call$2 = functionCall;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var getIteratorDirect = getIteratorDirect$1;
var INVALID_SIZE = "Invalid size";
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;
var SetRecord = function(set2, intSize) {
  this.set = set2;
  this.size = max(intSize, 0);
  this.has = aCallable(set2.has);
  this.keys = aCallable(set2.keys);
};
SetRecord.prototype = {
  getIterator: function() {
    return getIteratorDirect(anObject$2(call$2(this.keys, this.set)));
  },
  includes: function(it) {
    return call$2(this.has, this.set, it);
  }
};
var getSetRecord$7 = function(obj) {
  anObject$2(obj);
  var numSize = +obj.size;
  if (numSize !== numSize)
    throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0)
    throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};
var aSet$6 = aSet$7;
var SetHelpers$2 = setHelpers;
var clone$2 = setClone;
var size$4 = setSize;
var getSetRecord$6 = getSetRecord$7;
var iterateSet$2 = setIterate;
var iterateSimple$5 = iterateSimple$7;
var has$4 = SetHelpers$2.has;
var remove$1 = SetHelpers$2.remove;
var setDifference = function difference(other) {
  var O = aSet$6(this);
  var otherRec = getSetRecord$6(other);
  var result = clone$2(O);
  if (size$4(O) <= otherRec.size)
    iterateSet$2(O, function(e) {
      if (otherRec.includes(e))
        remove$1(result, e);
    });
  else
    iterateSimple$5(otherRec.getIterator(), function(e) {
      if (has$4(O, e))
        remove$1(result, e);
    });
  return result;
};
var getBuiltIn$1 = getBuiltIn$6;
var createSetLike = function(size2) {
  return {
    size: size2,
    has: function() {
      return false;
    },
    keys: function() {
      return {
        next: function() {
          return { done: true };
        }
      };
    }
  };
};
var setMethodAcceptSetLike$7 = function(name) {
  var Set2 = getBuiltIn$1("Set");
  try {
    new Set2()[name](createSetLike(0));
    try {
      new Set2()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
var $$8 = _export;
var difference2 = setDifference;
var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;
$$8({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike$6("difference") }, {
  difference: difference2
});
var aSet$5 = aSet$7;
var SetHelpers$1 = setHelpers;
var size$3 = setSize;
var getSetRecord$5 = getSetRecord$7;
var iterateSet$1 = setIterate;
var iterateSimple$4 = iterateSimple$7;
var Set$1 = SetHelpers$1.Set;
var add$2 = SetHelpers$1.add;
var has$3 = SetHelpers$1.has;
var setIntersection = function intersection(other) {
  var O = aSet$5(this);
  var otherRec = getSetRecord$5(other);
  var result = new Set$1();
  if (size$3(O) > otherRec.size) {
    iterateSimple$4(otherRec.getIterator(), function(e) {
      if (has$3(O, e))
        add$2(result, e);
    });
  } else {
    iterateSet$1(O, function(e) {
      if (otherRec.includes(e))
        add$2(result, e);
    });
  }
  return result;
};
var $$7 = _export;
var fails$3 = fails$j;
var intersection2 = setIntersection;
var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;
var INCORRECT = !setMethodAcceptSetLike$5("intersection") || fails$3(function() {
  return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
});
$$7({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection2
});
var aSet$4 = aSet$7;
var has$2 = setHelpers.has;
var size$2 = setSize;
var getSetRecord$4 = getSetRecord$7;
var iterateSet = setIterate;
var iterateSimple$3 = iterateSimple$7;
var iteratorClose$2 = iteratorClose$4;
var setIsDisjointFrom = function isDisjointFrom(other) {
  var O = aSet$4(this);
  var otherRec = getSetRecord$4(other);
  if (size$2(O) <= otherRec.size)
    return iterateSet(O, function(e) {
      if (otherRec.includes(e))
        return false;
    }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple$3(iterator, function(e) {
    if (has$2(O, e))
      return iteratorClose$2(iterator, "normal", false);
  }) !== false;
};
var $$6 = _export;
var isDisjointFrom2 = setIsDisjointFrom;
var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;
$$6({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike$4("isDisjointFrom") }, {
  isDisjointFrom: isDisjointFrom2
});
var aSet$3 = aSet$7;
var size$1 = setSize;
var iterate$1 = setIterate;
var getSetRecord$3 = getSetRecord$7;
var setIsSubsetOf = function isSubsetOf(other) {
  var O = aSet$3(this);
  var otherRec = getSetRecord$3(other);
  if (size$1(O) > otherRec.size)
    return false;
  return iterate$1(O, function(e) {
    if (!otherRec.includes(e))
      return false;
  }, true) !== false;
};
var $$5 = _export;
var isSubsetOf2 = setIsSubsetOf;
var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;
$$5({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike$3("isSubsetOf") }, {
  isSubsetOf: isSubsetOf2
});
var aSet$2 = aSet$7;
var has$1 = setHelpers.has;
var size = setSize;
var getSetRecord$2 = getSetRecord$7;
var iterateSimple$2 = iterateSimple$7;
var iteratorClose$1 = iteratorClose$4;
var setIsSupersetOf = function isSupersetOf(other) {
  var O = aSet$2(this);
  var otherRec = getSetRecord$2(other);
  if (size(O) < otherRec.size)
    return false;
  var iterator = otherRec.getIterator();
  return iterateSimple$2(iterator, function(e) {
    if (!has$1(O, e))
      return iteratorClose$1(iterator, "normal", false);
  }) !== false;
};
var $$4 = _export;
var isSupersetOf2 = setIsSupersetOf;
var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;
$$4({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike$2("isSupersetOf") }, {
  isSupersetOf: isSupersetOf2
});
var aSet$1 = aSet$7;
var SetHelpers = setHelpers;
var clone$1 = setClone;
var getSetRecord$1 = getSetRecord$7;
var iterateSimple$1 = iterateSimple$7;
var add$1 = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;
var setSymmetricDifference = function symmetricDifference(other) {
  var O = aSet$1(this);
  var keysIter = getSetRecord$1(other).getIterator();
  var result = clone$1(O);
  iterateSimple$1(keysIter, function(e) {
    if (has(O, e))
      remove(result, e);
    else
      add$1(result, e);
  });
  return result;
};
var $$3 = _export;
var symmetricDifference2 = setSymmetricDifference;
var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;
$$3({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike$1("symmetricDifference") }, {
  symmetricDifference: symmetricDifference2
});
var aSet = aSet$7;
var add = setHelpers.add;
var clone = setClone;
var getSetRecord = getSetRecord$7;
var iterateSimple = iterateSimple$7;
var setUnion = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function(it) {
    add(result, it);
  });
  return result;
};
var $$2 = _export;
var union2 = setUnion;
var setMethodAcceptSetLike = setMethodAcceptSetLike$7;
$$2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("union") }, {
  union: union2
});
var path$3 = path$5;
path$3.Set;
var classof$1 = classofRaw$2;
var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$1(argument) === "Array";
};
var uncurryThis$4 = functionUncurryThis;
var fails$2 = fails$j;
var isCallable = isCallable$h;
var classof = classof$5;
var getBuiltIn = getBuiltIn$6;
var inspectSource = inspectSource$2;
var noop = function() {
};
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$4(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument))
    return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable(argument))
    return false;
  switch (classof(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$2 = !construct || fails$2(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isArray$1 = isArray$2;
var isConstructor$1 = isConstructor$2;
var isObject$2 = isObject$f;
var wellKnownSymbol = wellKnownSymbol$c;
var SPECIES = wellKnownSymbol("species");
var $Array$1 = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor$1(C) && (C === $Array$1 || isArray$1(C.prototype)))
      C = void 0;
    else if (isObject$2(C)) {
      C = C[SPECIES];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? $Array$1 : C;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$1 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var bind$1 = functionBindContext;
var uncurryThis$3 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$2 = toObject$5;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var arraySpeciesCreate = arraySpeciesCreate$1;
var push = uncurryThis$3([].push);
var createMethod = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self2 = IndexedObject$1(O);
    var length = lengthOfArrayLike$1(self2);
    var boundFunction = bind$1(callbackfn, that);
    var index2 = 0;
    var create3 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create3($this, length) : IS_FILTER || IS_FILTER_REJECT ? create3($this, 0) : void 0;
    var value, result;
    for (; length > index2; index2++)
      if (NO_HOLES || index2 in self2) {
        value = self2[index2];
        result = boundFunction(value, index2, O);
        if (TYPE) {
          if (IS_MAP)
            target[index2] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index2;
              case 2:
                push(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};
var uncurryThis$2 = functionUncurryThis;
var defineBuiltIns$1 = defineBuiltIns$3;
var getWeakData = internalMetadataExports.getWeakData;
var anInstance = anInstance$3;
var anObject$1 = anObject$a;
var isNullOrUndefined = isNullOrUndefined$6;
var isObject$1 = isObject$f;
var iterate = iterate$6;
var ArrayIterationModule = arrayIteration;
var hasOwn2 = hasOwnProperty_1;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis$2([].splice);
var id = 0;
var uncaughtFrozenStore = function(state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
  this.entries = [];
};
var findUncaughtFrozen = function(store2, key) {
  return find(store2.entries, function(it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      return entry[1];
  },
  has: function(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      entry[1] = value;
    else
      this.entries.push([key, value]);
  },
  "delete": function(key) {
    var index2 = findIndex(this.entries, function(it) {
      return it[0] === key;
    });
    if (~index2)
      splice(this.entries, index2, 1);
    return !!~index2;
  }
};
var collectionWeak$1 = {
  getConstructor: function(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper2(function(that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: void 0
      });
      if (!isNullOrUndefined(iterable))
        iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var data2 = getWeakData(anObject$1(key), true);
      if (data2 === true)
        uncaughtFrozenStore(state).set(key, value);
      else
        data2[state.id] = value;
      return that;
    };
    defineBuiltIns$1(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      "delete": function(key) {
        var state = getInternalState2(this);
        if (!isObject$1(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state)["delete"](key);
        return data2 && hasOwn2(data2, state.id) && delete data2[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has2(key) {
        var state = getInternalState2(this);
        if (!isObject$1(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state).has(key);
        return data2 && hasOwn2(data2, state.id);
      }
    });
    defineBuiltIns$1(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get2(key) {
        var state = getInternalState2(this);
        if (isObject$1(key)) {
          var data2 = getWeakData(key);
          if (data2 === true)
            return uncaughtFrozenStore(state).get(key);
          return data2 ? data2[state.id] : void 0;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set2(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add2(value) {
        return define(this, value, true);
      }
    });
    return Constructor;
  }
};
var FREEZING = freezing;
var global$1 = global$d;
var uncurryThis$1 = functionUncurryThis;
var defineBuiltIns = defineBuiltIns$3;
var InternalMetadataModule = internalMetadataExports;
var collection = collection$3;
var collectionWeak = collectionWeak$1;
var isObject = isObject$f;
var enforceInternalState = internalState.enforce;
var fails$1 = fails$j;
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var $Object = Object;
var isArray2 = Array.isArray;
var isExtensible2 = $Object.isExtensible;
var isFrozen = $Object.isFrozen;
var isSealed = $Object.isSealed;
var freeze = $Object.freeze;
var seal = $Object.seal;
var IS_IE11 = !global$1.ActiveXObject && "ActiveXObject" in global$1;
var InternalWeakMap;
var wrapper = function(init) {
  return function WeakMap2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
};
var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis$1(WeakMapPrototype.set);
var hasMSEdgeFreezingBug = function() {
  return FREEZING && fails$1(function() {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};
if (NATIVE_WEAK_MAP) {
  if (IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
    InternalMetadataModule.enable();
    var nativeDelete = uncurryThis$1(WeakMapPrototype["delete"]);
    var nativeHas = uncurryThis$1(WeakMapPrototype.has);
    var nativeGet = uncurryThis$1(WeakMapPrototype.get);
    defineBuiltIns(WeakMapPrototype, {
      "delete": function(key) {
        if (isObject(key) && !isExtensible2(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen)
            state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen["delete"](key);
        }
        return nativeDelete(this, key);
      },
      has: function has2(key) {
        if (isObject(key) && !isExtensible2(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen)
            state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }
        return nativeHas(this, key);
      },
      get: function get2(key) {
        if (isObject(key) && !isExtensible2(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen)
            state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }
        return nativeGet(this, key);
      },
      set: function set2(key, value) {
        if (isObject(key) && !isExtensible2(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen)
            state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else
          nativeSet(this, key, value);
        return this;
      }
    });
  } else if (hasMSEdgeFreezingBug()) {
    defineBuiltIns(WeakMapPrototype, {
      set: function set2(key, value) {
        var arrayIntegrityLevel;
        if (isArray2(key)) {
          if (isFrozen(key))
            arrayIntegrityLevel = freeze;
          else if (isSealed(key))
            arrayIntegrityLevel = seal;
        }
        nativeSet(this, key, value);
        if (arrayIntegrityLevel)
          arrayIntegrityLevel(key);
        return this;
      }
    });
  }
}
var path$2 = path$5;
path$2.WeakMap;
var anObject = anObject$a;
var iteratorClose = iteratorClose$4;
var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, "throw", error);
  }
};
var DESCRIPTORS$1 = descriptors;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;
var createProperty$1 = function(object, key, value) {
  if (DESCRIPTORS$1)
    definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else
    object[key] = value;
};
var bind = functionBindContext;
var call$1 = functionCall;
var toObject$1 = toObject$5;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isConstructor3 = isConstructor$2;
var lengthOfArrayLike = lengthOfArrayLike$4;
var createProperty = createProperty$1;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var $Array = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$1(arrayLike);
  var IS_CONSTRUCTOR = isConstructor3(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod(O);
  var index2 = 0;
  var length, result, step, iterator, next3, value;
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next3 = iterator.next;
    for (; !(step = call$1(next3, iterator)).done; index2++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
      createProperty(result, index2, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (; length > index2; index2++) {
      value = mapping ? mapfn(O[index2], index2) : O[index2];
      createProperty(result, index2, value);
    }
  }
  result.length = index2;
  return result;
};
var $$1 = _export;
var from2 = arrayFrom;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$$1({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from2
});
var path$1 = path$5;
path$1.Array.from;
var DESCRIPTORS = descriptors;
var uncurryThis = functionUncurryThis;
var call = functionCall;
var fails = fails$j;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$5;
var IndexedObject = indexedObject;
var $assign = Object.assign;
var defineProperty3 = Object.defineProperty;
var concat = uncurryThis([].concat);
var objectAssign = !$assign || fails(function() {
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty3({}, "a", {
    enumerable: true,
    get: function() {
      defineProperty3(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1)
    return true;
  var A = {};
  var B = {};
  var symbol = Symbol("assign detection");
  var alphabet = "abcdefghijklmnopqrst";
  A[symbol] = 7;
  alphabet.split("").forEach(function(chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
}) ? function assign(target, source) {
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index2 = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable2 = propertyIsEnumerableModule.f;
  while (argumentsLength > index2) {
    var S = IndexedObject(arguments[index2++]);
    var keys3 = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys3.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys3[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable2, S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $ = _export;
var assign2 = objectAssign;
$({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign2 }, {
  assign: assign2
});
var path = path$5;
path.Object.assign;
let eventListenerOptions;
const eventMap = /* @__PURE__ */ new WeakMap();
function getOptions() {
  if (eventListenerOptions !== void 0) {
    return eventListenerOptions;
  }
  let supportPassiveEvent = false;
  try {
    const noop2 = () => {
    };
    const options = Object.defineProperty({}, "passive", {
      enumerable: true,
      get() {
        supportPassiveEvent = true;
        return true;
      }
    });
    window.addEventListener("testPassive", noop2, options);
    window.removeEventListener("testPassive", noop2, options);
  } catch (e) {
  }
  eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
  return eventListenerOptions;
}
function eventScope(scrollbar) {
  const configs = eventMap.get(scrollbar) || [];
  eventMap.set(scrollbar, configs);
  return function addEvent(elem, events, fn) {
    function handler(event) {
      if (event.defaultPrevented) {
        return;
      }
      fn(event);
    }
    events.split(/\s+/g).forEach((eventName) => {
      configs.push({ elem, eventName, handler });
      elem.addEventListener(eventName, handler, getOptions());
    });
  };
}
function clearEventsOn(scrollbar) {
  const configs = eventMap.get(scrollbar);
  if (!configs) {
    return;
  }
  configs.forEach(({ elem, eventName, handler }) => {
    elem.removeEventListener(eventName, handler, getOptions());
  });
  eventMap.delete(scrollbar);
}
function isScrollEnabled(scrollbar, key) {
  return scrollbar.track[key].element.scrollHeight - scrollbar.track[key].thumb.element.scrollHeight > 1;
}
function getPointerData(evt) {
  return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}
function getPosition(evt) {
  const data2 = getPointerData(evt);
  return {
    x: data2.clientX,
    y: data2.clientY
  };
}
function isOneOf(a, b = []) {
  return b.some((v) => a === v);
}
const VENDOR_PREFIX = [
  "webkit",
  "moz",
  "ms",
  "o"
];
const RE = new RegExp(`^-(?!(?:${VENDOR_PREFIX.join("|")})-)`);
function autoPrefix(styles) {
  const res = {};
  Object.keys(styles).forEach((prop) => {
    if (!RE.test(prop)) {
      res[prop] = styles[prop];
      return;
    }
    const val = styles[prop];
    prop = prop.replace(/^-/, "");
    res[prop] = val;
    VENDOR_PREFIX.forEach((prefix) => {
      res[`-${prefix}-${prop}`] = val;
    });
  });
  return res;
}
function setStyle(elem, styles) {
  styles = autoPrefix(styles);
  Object.keys(styles).forEach((prop) => {
    const cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());
    elem.style[cssProp] = styles[prop];
  });
}
class Tracker {
  constructor(touch) {
    this.velocityMultiplier = window.devicePixelRatio;
    this.updateTime = Date.now();
    this.delta = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.lastPosition = { x: 0, y: 0 };
    this.lastPosition = getPosition(touch);
  }
  update(touch) {
    const {
      velocity,
      updateTime,
      lastPosition
    } = this;
    const now = Date.now();
    const position = getPosition(touch);
    const delta = {
      x: -(position.x - lastPosition.x),
      y: -(position.y - lastPosition.y)
    };
    const duration = now - updateTime || 16.7;
    const vx = delta.x / duration * 16.7;
    const vy = delta.y / duration * 16.7;
    velocity.x = vx * this.velocityMultiplier;
    velocity.y = vy * this.velocityMultiplier;
    this.delta = delta;
    this.updateTime = now;
    this.lastPosition = position;
  }
}
class TouchRecord {
  constructor() {
    this._touchList = {};
  }
  get _primitiveValue() {
    return { x: 0, y: 0 };
  }
  isActive() {
    return this._activeTouchID !== void 0;
  }
  getDelta() {
    const tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return { ...tracker.delta };
  }
  getVelocity() {
    const tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return { ...tracker.velocity };
  }
  getEasingDistance(damping) {
    const deAcceleration = 1 - damping;
    let distance = {
      x: 0,
      y: 0
    };
    const vel = this.getVelocity();
    Object.keys(vel).forEach((dir) => {
      let v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
      while (v !== 0) {
        distance[dir] += v;
        v = v * deAcceleration | 0;
      }
    });
    return distance;
  }
  track(evt) {
    const {
      targetTouches
    } = evt;
    Array.from(targetTouches).forEach((touch) => {
      this._add(touch);
    });
    return this._touchList;
  }
  update(evt) {
    const {
      touches,
      changedTouches
    } = evt;
    Array.from(touches).forEach((touch) => {
      this._renew(touch);
    });
    this._setActiveID(changedTouches);
    return this._touchList;
  }
  release(evt) {
    delete this._activeTouchID;
    Array.from(evt.changedTouches).forEach((touch) => {
      this._delete(touch);
    });
  }
  _add(touch) {
    if (this._has(touch)) {
      this._delete(touch);
    }
    const tracker = new Tracker(touch);
    this._touchList[touch.identifier] = tracker;
  }
  _renew(touch) {
    if (!this._has(touch)) {
      return;
    }
    const tracker = this._touchList[touch.identifier];
    tracker == null ? void 0 : tracker.update(touch);
  }
  _delete(touch) {
    delete this._touchList[touch.identifier];
  }
  _has(touch) {
    return this._touchList.hasOwnProperty(touch.identifier);
  }
  _setActiveID(touches) {
    this._activeTouchID = touches[touches.length - 1].identifier;
  }
  _getActiveTracker() {
    const {
      _touchList,
      _activeTouchID
    } = this;
    return _touchList[_activeTouchID ?? 0];
  }
}
function clamp(value, lower, upper) {
  return Math.max(lower, Math.min(upper, value));
}
function debounce$1(fn, wait = 0, leading) {
  let timer;
  let lastCalledAt = -Infinity;
  return function debouncedFn(...args) {
    if (leading) {
      const now = Date.now();
      const elapsed = now - lastCalledAt;
      lastCalledAt = now;
      if (elapsed >= wait) {
        fn.apply(this, args);
      }
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
function range(min2 = -Infinity, max2 = Infinity) {
  return (proto, key) => {
    const alias = `_${key}`;
    Object.defineProperty(proto, key, {
      get() {
        return this[alias];
      },
      set(val) {
        Object.defineProperty(this, alias, {
          value: clamp(val, min2, max2),
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      enumerable: true,
      configurable: true
    });
  };
}
function boolean(proto, key) {
  const alias = `_${key}`;
  Object.defineProperty(proto, key, {
    get() {
      return this[alias];
    },
    set(val) {
      Object.defineProperty(this, alias, {
        value: !!val,
        enumerable: false,
        writable: true,
        configurable: true
      });
    },
    enumerable: true,
    configurable: true
  });
}
function debounce(...options) {
  return (_proto, key, descriptor) => {
    const fn = descriptor.value;
    return {
      get() {
        if (!this.hasOwnProperty(key)) {
          Object.defineProperty(this, key, {
            value: debounce$1(fn, ...options)
          });
        }
        return this[key];
      }
    };
  };
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
class Options {
  constructor(config = {}) {
    this.damping = 0.1;
    this.thumbMinSize = 20;
    this.renderByPixels = true;
    this.alwaysShowTracks = false;
    this.continuousScrolling = true;
    this.delegateTo = null;
    this.keepStruct = true;
    this.plugins = {};
    Object.keys(config).forEach((prop) => {
      this[prop] = config[prop];
    });
  }
  get wheelEventTarget() {
    return this.delegateTo;
  }
  set wheelEventTarget(el) {
    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
    this.delegateTo = el;
  }
}
__decorateClass$2([
  range(0, 1)
], Options.prototype, "damping", 2);
__decorateClass$2([
  range(0, Infinity)
], Options.prototype, "thumbMinSize", 2);
__decorateClass$2([
  boolean
], Options.prototype, "renderByPixels", 2);
__decorateClass$2([
  boolean
], Options.prototype, "alwaysShowTracks", 2);
__decorateClass$2([
  boolean
], Options.prototype, "continuousScrolling", 2);
var TrackDirection = /* @__PURE__ */ ((TrackDirection2) => {
  TrackDirection2["X"] = "x";
  TrackDirection2["Y"] = "y";
  return TrackDirection2;
})(TrackDirection || {});
class ScrollbarThumb {
  constructor(_direction, _minSize = 0) {
    this._direction = _direction;
    this._minSize = _minSize;
    this.element = document.createElement("div");
    this.displaySize = 0;
    this.realSize = 0;
    this.offset = 0;
    this.element.className = `scrollbar-thumb scrollbar-thumb-${_direction}`;
  }
  /**
   * Attach to track element
   *
   * @param trackEl Track element
   */
  attachTo(trackEl) {
    trackEl.appendChild(this.element);
  }
  update(scrollOffset, containerSize, pageSize) {
    this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
    this.displaySize = Math.max(this.realSize, this._minSize);
    this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
    setStyle(this.element, this._getStyle());
  }
  _getStyle() {
    switch (this._direction) {
      case TrackDirection.X:
        return {
          width: `${this.displaySize}px`,
          "-transform": `translate3d(${this.offset}px, 0, 0)`
        };
      case TrackDirection.Y:
        return {
          height: `${this.displaySize}px`,
          "-transform": `translate3d(0, ${this.offset}px, 0)`
        };
      default:
        return null;
    }
  }
}
class ScrollbarTrack {
  constructor(direction, thumbMinSize = 0) {
    this.element = document.createElement("div");
    this._isShown = false;
    this.element.className = `scrollbar-track scrollbar-track-${direction}`;
    this.thumb = new ScrollbarThumb(
      direction,
      thumbMinSize
    );
    this.thumb.attachTo(this.element);
  }
  /**
   * Attach to scrollbar container element
   *
   * @param scrollbarContainer Scrollbar container element
   */
  attachTo(scrollbarContainer) {
    scrollbarContainer.appendChild(this.element);
  }
  /**
   * Show track immediately
   */
  show() {
    if (this._isShown) {
      return;
    }
    this._isShown = true;
    this.element.classList.add("show");
  }
  /**
   * Hide track immediately
   */
  hide() {
    if (!this._isShown) {
      return;
    }
    this._isShown = false;
    this.element.classList.remove("show");
  }
  update(scrollOffset, containerSize, pageSize) {
    setStyle(this.element, {
      display: pageSize <= containerSize ? "none" : "block"
    });
    this.thumb.update(scrollOffset, containerSize, pageSize);
  }
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
class TrackController {
  constructor(_scrollbar) {
    this._scrollbar = _scrollbar;
    const thumbMinSize = _scrollbar.options.thumbMinSize;
    this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
    this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
    this.xAxis.attachTo(_scrollbar.containerEl);
    this.yAxis.attachTo(_scrollbar.containerEl);
    if (_scrollbar.options.alwaysShowTracks) {
      this.xAxis.show();
      this.yAxis.show();
    }
  }
  /**
   * Updates track appearance
   */
  update() {
    const {
      size: size2,
      offset
    } = this._scrollbar;
    this.xAxis.update(offset.x, size2.container.width, size2.content.width);
    this.yAxis.update(offset.y, size2.container.height, size2.content.height);
  }
  autoHideOnIdle() {
    if (this._scrollbar.options.alwaysShowTracks) {
      return;
    }
    this.xAxis.hide();
    this.yAxis.hide();
  }
}
__decorateClass$1([
  debounce(300)
], TrackController.prototype, "autoHideOnIdle", 1);
function getSize(scrollbar) {
  const {
    containerEl,
    contentEl
  } = scrollbar;
  const containerStyles = getComputedStyle(containerEl);
  const paddings = [
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight"
  ].map((prop) => {
    return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
  });
  const verticalPadding = paddings[0] + paddings[1];
  const horizontalPadding = paddings[2] + paddings[3];
  return {
    container: {
      // requires `overflow: hidden`
      width: containerEl.clientWidth,
      height: containerEl.clientHeight
    },
    content: {
      // border width and paddings should be included
      width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
      height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
    }
  };
}
function isVisible(scrollbar, elem) {
  const { bounding } = scrollbar;
  const targetBounding = elem.getBoundingClientRect();
  const top = Math.max(bounding.top, targetBounding.top);
  const left = Math.max(bounding.left, targetBounding.left);
  const right = Math.min(bounding.right, targetBounding.right);
  const bottom = Math.min(bounding.bottom, targetBounding.bottom);
  return top < bottom && left < right;
}
function update(scrollbar) {
  const newSize = scrollbar.getSize();
  const limit = {
    x: Math.max(newSize.content.width - newSize.container.width, 0),
    y: Math.max(newSize.content.height - newSize.container.height, 0)
  };
  const containerBounding = scrollbar.containerEl.getBoundingClientRect();
  const bounding = {
    top: Math.max(containerBounding.top, 0),
    right: Math.min(containerBounding.right, window.innerWidth),
    bottom: Math.min(containerBounding.bottom, window.innerHeight),
    left: Math.max(containerBounding.left, 0)
  };
  scrollbar.size = newSize;
  scrollbar.limit = limit;
  scrollbar.bounding = bounding;
  scrollbar.track.update();
  scrollbar.setPosition();
}
function setPosition(scrollbar, x, y) {
  const {
    options,
    offset,
    limit,
    track,
    contentEl
  } = scrollbar;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  x = clamp(x, 0, limit.x);
  y = clamp(y, 0, limit.y);
  if (x !== offset.x)
    track.xAxis.show();
  if (y !== offset.y)
    track.yAxis.show();
  if (!options.alwaysShowTracks) {
    track.autoHideOnIdle();
  }
  if (x === offset.x && y === offset.y) {
    return null;
  }
  offset.x = x;
  offset.y = y;
  if (!options.keepStruct) {
    setStyle(contentEl, {
      "-transform": `translate3d(${-x}px, ${-y}px, 0)`
    });
  }
  track.update();
  return {
    offset: { ...offset },
    limit: { ...limit }
  };
}
const animationIDStorage = /* @__PURE__ */ new WeakMap();
function scrollTo(scrollbar, x, y, duration = 0, { easing = defaultEasing, callback } = {}) {
  const {
    options,
    offset,
    limit
  } = scrollbar;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  const startX = offset.x;
  const startY = offset.y;
  const disX = clamp(x, 0, limit.x) - startX;
  const disY = clamp(y, 0, limit.y) - startY;
  const start = Date.now();
  function scroll() {
    const elapse = Date.now() - start;
    const progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
    scrollbar.setPosition(
      startX + disX * progress,
      startY + disY * progress
    );
    if (elapse >= duration) {
      if (typeof callback === "function") {
        callback.call(scrollbar);
      }
    } else {
      const animationID = requestAnimationFrame(scroll);
      animationIDStorage.set(scrollbar, animationID);
    }
  }
  cancelAnimationFrame(animationIDStorage.get(scrollbar));
  scroll();
}
function defaultEasing(t) {
  return (t - 1) ** 3 + 1;
}
function scrollIntoView(scrollbar, elem, {
  alignToTop = true,
  onlyScrollIfNeeded = false,
  offsetTop = 0,
  offsetLeft = 0,
  offsetBottom = 0
} = {}) {
  const {
    containerEl,
    bounding,
    offset,
    limit
  } = scrollbar;
  if (!elem || !containerEl.contains(elem))
    return;
  const targetBounding = elem.getBoundingClientRect();
  if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
    return;
  const delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
  scrollbar.setMomentum(
    targetBounding.left - bounding.left - offsetLeft,
    clamp(delta, -offset.y, limit.y - offset.y)
  );
}
const _ScrollbarPlugin = class _ScrollbarPlugin {
  constructor(scrollbar, options) {
    this.scrollbar = scrollbar;
    this.name = new.target.pluginName;
    this.options = {
      ...new.target.defaultOptions,
      ...options
    };
  }
  onInit() {
  }
  onDestroy() {
  }
  onUpdate() {
  }
  onRender(_remainMomentum) {
  }
  transformDelta(delta, _evt) {
    return { ...delta };
  }
};
_ScrollbarPlugin.pluginName = "";
_ScrollbarPlugin.defaultOptions = {};
let ScrollbarPlugin = _ScrollbarPlugin;
const globalPlugins = {
  order: /* @__PURE__ */ new Set(),
  constructors: {}
};
function addPlugins(...Plugins) {
  Plugins.forEach((P) => {
    const { pluginName } = P;
    if (!pluginName) {
      throw new TypeError(`plugin name is required`);
    }
    globalPlugins.order.add(pluginName);
    globalPlugins.constructors[pluginName] = P;
  });
}
function initPlugins(scrollbar, options) {
  return Array.from(globalPlugins.order).filter((pluginName) => {
    return options[pluginName] !== false;
  }).map((pluginName) => {
    const Plugin = globalPlugins.constructors[pluginName];
    const instance = new Plugin(scrollbar, options[pluginName]);
    options[pluginName] = instance.options;
    return instance;
  });
}
function keyboardHandler(scrollbar) {
  const addEvent = eventScope(scrollbar);
  const container = scrollbar.containerEl;
  addEvent(container, "keydown", (evt) => {
    const { activeElement } = document;
    if (activeElement !== container && !container.contains(activeElement)) {
      return;
    }
    if (isEditable(activeElement)) {
      return;
    }
    const delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
    if (!delta) {
      return;
    }
    const [x, y] = delta;
    scrollbar.addTransformableMomentum(x, y, evt, (willScroll) => {
      if (willScroll) {
        evt.preventDefault();
      } else {
        scrollbar.containerEl.blur();
        if (scrollbar.parent) {
          scrollbar.parent.containerEl.focus();
        }
      }
    });
  });
}
function getKeyDelta(scrollbar, keyCode) {
  const {
    size: size2,
    limit,
    offset
  } = scrollbar;
  switch (keyCode) {
    case 9:
      return handleTabKey(scrollbar);
    case 32:
      return [0, 200];
    case 33:
      return [0, -size2.container.height + 40];
    case 34:
      return [0, size2.container.height - 40];
    case 35:
      return [0, limit.y - offset.y];
    case 36:
      return [0, -offset.y];
    case 37:
      return [-40, 0];
    case 38:
      return [0, -40];
    case 39:
      return [40, 0];
    case 40:
      return [0, 40];
    default:
      return null;
  }
}
function handleTabKey(scrollbar) {
  requestAnimationFrame(() => {
    scrollbar.scrollIntoView(document.activeElement, {
      offsetTop: scrollbar.size.container.height / 2,
      offsetLeft: scrollbar.size.container.width / 2,
      onlyScrollIfNeeded: true
    });
  });
}
function isEditable(elem) {
  if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) {
    return !elem.disabled;
  }
  return false;
}
function mouseHandler(scrollbar) {
  const addEvent = eventScope(scrollbar);
  const container = scrollbar.containerEl;
  const { xAxis, yAxis } = scrollbar.track;
  function calcMomentum2(direction, clickPosition) {
    const {
      size: size2,
      limit,
      offset
    } = scrollbar;
    if (direction === 0) {
      const totalWidth = size2.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
      return clamp(clickPosition / totalWidth * size2.content.width, 0, limit.x) - offset.x;
    }
    if (direction === 1) {
      const totalHeight = size2.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
      return clamp(clickPosition / totalHeight * size2.content.height, 0, limit.y) - offset.y;
    }
    return 0;
  }
  function getTrackDirection(elem) {
    if (isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
      return 0;
    }
    if (isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
      return 1;
    }
    return void 0;
  }
  let isMouseDown;
  let isMouseMoving;
  let startOffsetToThumb;
  let trackDirection;
  let containerRect;
  addEvent(container, "click", (evt) => {
    if (isMouseMoving || !isOneOf(evt.target, [xAxis.element, yAxis.element])) {
      return;
    }
    const track = evt.target;
    const direction = getTrackDirection(track);
    const rect = track.getBoundingClientRect();
    const clickPos = getPosition(evt);
    if (direction === 0) {
      const offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(calcMomentum2(direction, offsetOnTrack), 0);
    }
    if (direction === 1) {
      const offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(0, calcMomentum2(direction, offsetOnTrack));
    }
  });
  addEvent(container, "mousedown", (evt) => {
    if (!isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
      return;
    }
    isMouseDown = true;
    const thumb = evt.target;
    const cursorPos = getPosition(evt);
    const thumbRect = thumb.getBoundingClientRect();
    trackDirection = getTrackDirection(thumb);
    startOffsetToThumb = {
      x: cursorPos.x - thumbRect.left,
      y: cursorPos.y - thumbRect.top
    };
    containerRect = container.getBoundingClientRect();
    setStyle(scrollbar.containerEl, {
      "-user-select": "none"
    });
  });
  addEvent(window, "mousemove", (evt) => {
    if (!isMouseDown)
      return;
    isMouseMoving = true;
    const cursorPos = getPosition(evt);
    if (trackDirection === 0) {
      const offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
      scrollbar.setMomentum(calcMomentum2(trackDirection, offsetOnTrack), 0);
    }
    if (trackDirection === 1) {
      const offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
      scrollbar.setMomentum(0, calcMomentum2(trackDirection, offsetOnTrack));
    }
  });
  addEvent(window, "mouseup blur", () => {
    isMouseDown = isMouseMoving = false;
    setStyle(scrollbar.containerEl, {
      "-user-select": ""
    });
  });
}
function resizeHandler(scrollbar) {
  const addEvent = eventScope(scrollbar);
  addEvent(
    window,
    "resize",
    debounce$1(scrollbar.update.bind(scrollbar), 300)
  );
}
function selectHandler(scrollbar) {
  const addEvent = eventScope(scrollbar);
  const { containerEl, contentEl } = scrollbar;
  let isSelected = false;
  let isContextMenuOpened = false;
  let animationID;
  function scroll({ x, y }) {
    if (!x && !y)
      return;
    const { offset, limit } = scrollbar;
    scrollbar.setMomentum(
      clamp(offset.x + x, 0, limit.x) - offset.x,
      clamp(offset.y + y, 0, limit.y) - offset.y
    );
    animationID = requestAnimationFrame(() => {
      scroll({ x, y });
    });
  }
  addEvent(window, "mousemove", (evt) => {
    if (!isSelected)
      return;
    cancelAnimationFrame(animationID);
    const dir = calcMomentum(scrollbar, evt);
    scroll(dir);
  });
  addEvent(contentEl, "contextmenu", () => {
    isContextMenuOpened = true;
    cancelAnimationFrame(animationID);
    isSelected = false;
  });
  addEvent(contentEl, "mousedown", () => {
    isContextMenuOpened = false;
  });
  addEvent(contentEl, "selectstart", () => {
    if (isContextMenuOpened) {
      return;
    }
    cancelAnimationFrame(animationID);
    isSelected = true;
  });
  addEvent(window, "mouseup blur", () => {
    cancelAnimationFrame(animationID);
    isSelected = false;
    isContextMenuOpened = false;
  });
  addEvent(containerEl, "scroll", (evt) => {
    evt.preventDefault();
    containerEl.scrollTop = containerEl.scrollLeft = 0;
  });
}
function calcMomentum(scrollbar, evt) {
  const { top, right, bottom, left } = scrollbar.bounding;
  const { x, y } = getPosition(evt);
  const res = {
    x: 0,
    y: 0
  };
  const padding = 20;
  if (x === 0 && y === 0)
    return res;
  if (x > right - padding) {
    res.x = x - right + padding;
  } else if (x < left + padding) {
    res.x = x - left - padding;
  }
  if (y > bottom - padding) {
    res.y = y - bottom + padding;
  } else if (y < top + padding) {
    res.y = y - top - padding;
  }
  res.x *= 2;
  res.y *= 2;
  return res;
}
let activeScrollbar;
function touchHandler(scrollbar) {
  const target = scrollbar.options.delegateTo || scrollbar.containerEl;
  const touchRecord = new TouchRecord();
  const addEvent = eventScope(scrollbar);
  let damping;
  let pointerCount = 0;
  addEvent(target, "touchstart", (evt) => {
    touchRecord.track(evt);
    scrollbar.setMomentum(0, 0);
    if (pointerCount === 0) {
      damping = scrollbar.options.damping;
      scrollbar.options.damping = Math.max(damping, 0.5);
    }
    pointerCount++;
  });
  addEvent(target, "touchmove", (evt) => {
    if (activeScrollbar && activeScrollbar !== scrollbar)
      return;
    touchRecord.update(evt);
    if (["xAxis", "yAxis"].some((key) => isScrollEnabled(scrollbar, key))) {
      const { x, y } = touchRecord.getDelta();
      scrollbar.addTransformableMomentum(x, y, evt, (willScroll) => {
        if (willScroll && evt.cancelable) {
          evt.preventDefault();
          activeScrollbar = scrollbar;
        }
      });
    }
  });
  addEvent(target, "touchcancel touchend", (evt) => {
    const delta = touchRecord.getEasingDistance(damping);
    scrollbar.addTransformableMomentum(
      delta.x,
      delta.y,
      evt
    );
    pointerCount--;
    if (pointerCount === 0) {
      scrollbar.options.damping = damping;
    }
    touchRecord.release(evt);
    activeScrollbar = null;
  });
}
function wheelHandler(scrollbar) {
  const addEvent = eventScope(scrollbar);
  const target = scrollbar.options.delegateTo || scrollbar.containerEl;
  const eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
  addEvent(target, eventName, (evt) => {
    if (["xAxis", "yAxis"].some((key) => isScrollEnabled(scrollbar, key))) {
      const { x, y } = normalizeDelta(evt);
      scrollbar.addTransformableMomentum(x, y, evt, (willScroll) => {
        if (willScroll) {
          evt.preventDefault();
        }
      });
    }
  });
}
const DELTA_SCALE = {
  STANDARD: 1,
  OTHERS: -3
};
const DELTA_MODE = [1, 28, 500];
const getDeltaMode = (mode) => DELTA_MODE[mode] || DELTA_MODE[0];
function normalizeDelta(evt) {
  if ("deltaX" in evt) {
    const mode = getDeltaMode(evt.deltaMode);
    return {
      x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
      y: evt.deltaY / DELTA_SCALE.STANDARD * mode
    };
  }
  if ("wheelDeltaX" in evt) {
    return {
      x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
      y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
  }
  return {
    x: 0,
    y: evt.wheelDelta / DELTA_SCALE.OTHERS
  };
}
const eventHandlers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  keyboardHandler,
  mouseHandler,
  resizeHandler,
  selectHandler,
  touchHandler,
  wheelHandler
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
const scrollbarMap = /* @__PURE__ */ new Map();
class Scrollbar {
  constructor(containerEl, options) {
    this.offset = {
      x: 0,
      y: 0
    };
    this.limit = {
      x: Infinity,
      y: Infinity
    };
    this.bounding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    this._plugins = [];
    this._momentum = { x: 0, y: 0 };
    this._listeners = /* @__PURE__ */ new Set();
    this.containerEl = containerEl;
    const contentEl = this.contentEl = (options == null ? void 0 : options.keepStruct) ? containerEl : document.createElement("div");
    this.options = new Options(options);
    containerEl.setAttribute("data-scrollbar", "true");
    containerEl.setAttribute("tabindex", "-1");
    setStyle(containerEl, {
      overflow: "hidden",
      outline: "none"
    });
    if (window.navigator.msPointerEnabled) {
      containerEl.style.msTouchAction = "none";
    }
    contentEl.classList.add("scroll-content");
    if (!(options == null ? void 0 : options.keepStruct)) {
      Array.from(containerEl.childNodes).forEach((node) => {
        contentEl.appendChild(node);
      });
      containerEl.appendChild(contentEl);
    }
    this.track = new TrackController(this);
    this.size = this.getSize();
    this._plugins = initPlugins(this, this.options.plugins);
    const { scrollLeft, scrollTop } = containerEl;
    containerEl.scrollLeft = containerEl.scrollTop = 0;
    this.setPosition(scrollLeft, scrollTop, {
      withoutCallbacks: true
    });
    const ResizeObserver = window.ResizeObserver;
    if (typeof ResizeObserver === "function") {
      this._observer = new ResizeObserver(() => {
        this.update();
      });
      this._observer.observe(contentEl);
    }
    scrollbarMap.set(containerEl, this);
    requestAnimationFrame(() => {
      this._init();
    });
  }
  /**
   * Parent scrollbar
   */
  get parent() {
    let elem = this.containerEl.parentElement;
    while (elem) {
      const parentScrollbar = scrollbarMap.get(elem);
      if (parentScrollbar) {
        return parentScrollbar;
      }
      elem = elem.parentElement;
    }
    return null;
  }
  /**
   * Gets or sets `scrollbar.offset.y`
   */
  get scrollTop() {
    return this.offset.y;
  }
  set scrollTop(y) {
    this.setPosition(this.scrollLeft, y);
  }
  /**
   * Gets or sets `scrollbar.offset.x`
   */
  get scrollLeft() {
    return this.offset.x;
  }
  set scrollLeft(x) {
    this.setPosition(x, this.scrollTop);
  }
  /**
   * Returns the size of the scrollbar container element
   * and the content wrapper element
   */
  getSize() {
    return getSize(this);
  }
  /**
   * Forces scrollbar to update geometry infomation.
   *
   * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
   * You can call this method to force an update when you modified contents
   */
  update() {
    update(this);
    this._plugins.forEach((plugin) => {
      plugin.onUpdate();
    });
  }
  /**
   * Checks if an element is visible in the current view area
   */
  isVisible(elem) {
    return isVisible(this, elem);
  }
  /**
   * Sets the scrollbar to the given offset without easing
   */
  setPosition(x = this.offset.x, y = this.offset.y, options = {}) {
    const status = setPosition(this, x, y);
    if (!status || options.withoutCallbacks) {
      return;
    }
    this._listeners.forEach((fn) => {
      fn.call(this, status);
    });
  }
  /**
   * Scrolls to given position with easing function
   */
  scrollTo(x = this.offset.x, y = this.offset.y, duration = 0, options = {}) {
    scrollTo(this, x, y, duration, options);
  }
  /**
   * Scrolls the target element into visible area of scrollbar,
   * likes the DOM method `element.scrollIntoView().
   */
  scrollIntoView(elem, options = {}) {
    scrollIntoView(this, elem, options);
  }
  /**
   * Adds scrolling listener
   */
  addListener(fn) {
    if (typeof fn !== "function") {
      throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
    }
    this._listeners.add(fn);
  }
  /**
   * Removes listener previously registered with `scrollbar.addListener()`
   */
  removeListener(fn) {
    this._listeners.delete(fn);
  }
  /**
   * Adds momentum and applys delta transformers.
   */
  addTransformableMomentum(x, y, fromEvent, callback) {
    this._updateDebounced();
    const finalDelta = this._plugins.reduce((delta, plugin) => {
      return plugin.transformDelta(delta, fromEvent) || delta;
    }, { x, y });
    const willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
    if (willScroll) {
      this.addMomentum(finalDelta.x, finalDelta.y);
    }
    if (callback) {
      callback.call(this, willScroll);
    }
  }
  /**
   * Increases scrollbar's momentum
   */
  addMomentum(x, y) {
    this.setMomentum(
      this._momentum.x + x,
      this._momentum.y + y
    );
  }
  /**
   * Sets scrollbar's momentum to given value
   */
  setMomentum(x, y) {
    if (this.limit.x === 0) {
      x = 0;
    }
    if (this.limit.y === 0) {
      y = 0;
    }
    if (this.options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }
    this._momentum.x = x;
    this._momentum.y = y;
  }
  /**
   * Update options for specific plugin
   *
   * @param pluginName Name of the plugin
   * @param [options] An object includes the properties that you want to update
   */
  updatePluginOptions(pluginName, options) {
    this._plugins.forEach((plugin) => {
      if (plugin.name === pluginName) {
        Object.assign(plugin.options, options);
      }
    });
  }
  destroy() {
    const {
      containerEl,
      contentEl
    } = this;
    clearEventsOn(this);
    this._listeners.clear();
    this.setMomentum(0, 0);
    cancelAnimationFrame(this._renderID);
    if (this._observer) {
      this._observer.disconnect();
    }
    scrollbarMap.delete(this.containerEl);
    const childNodes = Array.from(contentEl.childNodes);
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
    childNodes.forEach((el) => {
      containerEl.appendChild(el);
    });
    setStyle(containerEl, {
      overflow: ""
    });
    containerEl.scrollTop = this.scrollTop;
    containerEl.scrollLeft = this.scrollLeft;
    this._plugins.forEach((plugin) => {
      plugin.onDestroy();
    });
    this._plugins.length = 0;
  }
  _init() {
    this.update();
    Object.keys(eventHandlers).forEach((prop) => {
      eventHandlers[prop](this);
    });
    this._plugins.forEach((plugin) => {
      plugin.onInit();
    });
    this._render();
  }
  _updateDebounced() {
    this.update();
  }
  // check whether to propagate monmentum to parent scrollbar
  // the following situations are considered as `true`:
  //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
  //         2. scrollbar reaches one side and is not about to scroll on the other direction
  _shouldPropagateMomentum(deltaX = 0, deltaY = 0) {
    const {
      options,
      offset,
      limit
    } = this;
    if (!options.continuousScrolling)
      return false;
    if (limit.x === 0 && limit.y === 0) {
      this._updateDebounced();
    }
    const destX = clamp(deltaX + offset.x, 0, limit.x);
    const destY = clamp(deltaY + offset.y, 0, limit.y);
    let res = true;
    res = res && destX === offset.x;
    res = res && destY === offset.y;
    res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
    return res;
  }
  _render() {
    const {
      _momentum
    } = this;
    if (_momentum.x || _momentum.y) {
      const nextX = this._nextTick("x");
      const nextY = this._nextTick("y");
      _momentum.x = nextX.momentum;
      _momentum.y = nextY.momentum;
      this.setPosition(nextX.position, nextY.position);
    }
    const remain = { ...this._momentum };
    this._plugins.forEach((plugin) => {
      plugin.onRender(remain);
    });
    this._renderID = requestAnimationFrame(this._render.bind(this));
  }
  _nextTick(direction) {
    const {
      options,
      offset,
      _momentum
    } = this;
    const current = offset[direction];
    const remain = _momentum[direction];
    if (Math.abs(remain) <= 0.1) {
      return {
        momentum: 0,
        position: current + remain
      };
    }
    let nextMomentum = remain * (1 - options.damping);
    if (options.renderByPixels) {
      nextMomentum |= 0;
    }
    return {
      momentum: nextMomentum,
      position: current + remain - nextMomentum
    };
  }
}
__decorateClass([
  debounce(100, true)
], Scrollbar.prototype, "_updateDebounced", 1);
const TRACK_BG = "rgba(222, 222, 222, .75)";
const THUMB_BG = "rgba(0, 0, 0, .5)";
const SCROLLBAR_STYLE = `
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: ${TRACK_BG};
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${THUMB_BG};
  border-radius: 4px;
}
`;
const STYLE_ID = "smooth-scrollbar-style";
let isStyleAttached = false;
function attachStyle() {
  if (isStyleAttached || typeof window === "undefined") {
    return;
  }
  const styleEl = document.createElement("style");
  styleEl.id = STYLE_ID;
  styleEl.textContent = SCROLLBAR_STYLE;
  if (document.head) {
    document.head.appendChild(styleEl);
  }
  isStyleAttached = true;
}
function detachStyle() {
  if (!isStyleAttached || typeof window === "undefined") {
    return;
  }
  const styleEl = document.getElementById(STYLE_ID);
  if (!styleEl || !styleEl.parentNode) {
    return;
  }
  styleEl.parentNode.removeChild(styleEl);
  isStyleAttached = false;
}
var define_import_meta_env_default = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const _SmoothScrollbar = class _SmoothScrollbar extends Scrollbar {
  /**
   * Initializes a scrollbar on the given element.
   *
   * @param elem The DOM element that you want to initialize scrollbar to
   * @param [options] Initial options
   */
  static init(elem, options) {
    if (!elem || elem.nodeType !== 1) {
      throw new TypeError(`expect element to be DOM Element, but got ${elem}`);
    }
    attachStyle();
    if (scrollbarMap.has(elem)) {
      return scrollbarMap.get(elem);
    }
    return new Scrollbar(elem, options);
  }
  /**
   * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
   *
   * @param options Initial options
   */
  static initAll(options) {
    return Array.from(document.querySelectorAll("[data-scrollbar]"), (elem) => {
      return _SmoothScrollbar.init(elem, options);
    });
  }
  /**
   * Check if there is a scrollbar on given element
   *
   * @param elem The DOM element that you want to check
   */
  static has(elem) {
    return scrollbarMap.has(elem);
  }
  /**
   * Gets scrollbar on the given element.
   * If no scrollbar instance exsits, returns `undefined`
   *
   * @param elem The DOM element that you want to check.
   */
  static get(elem) {
    return scrollbarMap.get(elem);
  }
  /**
   * Returns an array that contains all scrollbar instances
   */
  static getAll() {
    return Array.from(scrollbarMap.values());
  }
  /**
   * Removes scrollbar on the given element
   */
  static destroy(elem) {
    const scrollbar = scrollbarMap.get(elem);
    if (scrollbar) {
      scrollbar.destroy();
    }
  }
  /**
   * Removes all scrollbar instances from current document
   */
  static destroyAll() {
    scrollbarMap.forEach((scrollbar) => {
      scrollbar.destroy();
    });
  }
  /**
   * Attaches plugins to scrollbars
   *
   * @param ...Plugins Scrollbar plugin classes
   */
  static use(...Plugins) {
    return addPlugins(...Plugins);
  }
  /**
   * Attaches default style sheets to current document.
   * You don't need to call this method manually unless
   * you removed the default styles via `Scrollbar.detachStyle()`
   */
  static attachStyle() {
    return attachStyle();
  }
  /**
   * Removes default styles from current document.
   * Use this method when you want to use your own css for scrollbars.
   */
  static detachStyle() {
    return detachStyle();
  }
};
_SmoothScrollbar.version = define_import_meta_env_default.__SCROLLBAR_VERSION__;
_SmoothScrollbar.ScrollbarPlugin = ScrollbarPlugin;
let SmoothScrollbar = _SmoothScrollbar;
const index = {
  SmoothScrollbar,
  ScrollbarPlugin
};
export {
  index as default
};
//# sourceMappingURL=bk-smooth-scrollbar.js.map
