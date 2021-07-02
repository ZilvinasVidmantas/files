'use strict';
// Creating object properties

{
  console.groupCollapsed('Creating object properties');
  // start with an empty object
  const dog = {};
  console.log('created empty object', { ...dog });
  // add one property
  dog.name = "Benji";
  // now add a method
  dog.getName = function () {
    return dog.name;
  };
  console.log('properties assigned', { ...dog });
  const dogCopy = Object.assign({}, dog);
  const dogCopy2 = { ...dog };

  // Change the values of properties and methods, for example:
  dog.getName = function () {
    // redefine the method to return
    // a hardcoded value
    return "Fido";
  };
  console.log('reassigned property', { ...dog });
  // Remove properties/methods completely:
  delete dog.name;
  console.log('property deletion', { ...dog });
  // Add more properties and methods:
  dog.say = function () {
    return "Woof!";
  };
  dog.fleas = true;
  console.log('properties added', { ...dog });
  console.groupEnd();
}

// Creating object properties with [] syntax
{
  console.groupCollapsed('Creating object properties with [] syntax');
  // start with an empty object
  const
    dog = {},
    objectMethodName = 'getName';
  console.log('created empty object', { ...dog });
  // add one property
  dog['name'] = "Benji";
  // now add a method
  dog[objectMethodName] = function () {
    return dog['name'];
  };
  console.log('properties assigned', { ...dog });

  // Change the values of properties and methods, for example:
  dog[objectMethodName] = function () {
    // redefine the method to return
    // a hardcoded value
    return "Fido";
  };
  console.log('reassigned property', { ...dog });
  // Remove properties/methods completely:
  delete dog['name'];
  console.log('property deletion', { ...dog });
  // Add more properties and methods:
  dog['say'] = function () {
    return "Woof!";
  };
  dog['fleas'] = true;
  console.log('properties added', { ...dog });
  console.groupEnd();
}

// Single declaration
{
  console.groupCollapsed('Single declaration');
  const dog = {
    name: "Benji",
    getName: function () {
      return this.name;
    }
  };
  console.log('object created with single declaration', { ...dog });
  console.groupEnd();
}

// Single declaration with [] syntax
{
  console.groupCollapsed('Single declaration with [] syntax');
  const
    methodName = 'getName',
    dog = {
      ['name']: "Benji",
      [methodName]: function () {
        return this.name;
      }
    };
  console.log('object created with single declaration', { ...dog });
  console.groupEnd();
}