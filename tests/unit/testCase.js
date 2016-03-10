/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var defaultCounter;
var initializedCounter;
 
TestCase('CounterTest', {
    setUp: function() {
        defaultCounter = new Counter();
        initializedCounter = new Counter(1);
    },
 
    tearDown: function() {
        defaultCounter = null;
        initializedCounter = null;
    },
 
    testInitialValue: function() {
        assertEquals('defaultCounter initial value should be 0', 
            0, 
            defaultCounter.value()
        );
 
        assertEquals(
            'the initial value should be the one given to constructor', 
            1, 
            initializedCounter.value()
        );
    },
 
    testIncrement: function() {
        defaultCounter.increment();
        initializedCounter.increment();    
 
        assertEquals('should increment defaultCounter by 1', 
            1, 
            defaultCounter.value()
        );
 
        assertEquals('should increment initializedCounter by 1', 
            2, 
            initializedCounter.value()
        );
    },
 
    testDecrement: function() {
        defaultCounter.decrement();
        initializedCounter.decrement();    
 
        assertEquals('should not decrement below the initial state', 
            0, 
            defaultCounter.value()
        );
 
        assertEquals('should not decrement below the initial state', 
            1, 
            initializedCounter.value()
        );
 
        defaultCounter.increment();
        initializedCounter.increment();  
        defaultCounter.decrement();
        initializedCounter.decrement();  
 
        assertEquals('should decrement defaultCounter by 1', 
            0, 
            defaultCounter.value()
        );
 
        assertEquals('should decrement initializedCounter by 1', 
            1, 
            initializedCounter.value()
        );
    },
 
    testReset: function() {
        defaultCounter.reset();
        initializedCounter.reset();
 
        assertEquals('should set defaultCounter to its initial state', 
            0, 
            defaultCounter.value()
        );
 
        assertEquals('should set initializedCounter to its initial state', 
            1, 
            initializedCounter.value()
        );
    }
});