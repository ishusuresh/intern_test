var input = {
     "2020-01-01": 4,
     "2020-01-02": 4,
     "2020-01-03": 6,
     "2020-01-04": 8,
     "2020-01-05": 2,
     "2020-01-06":-6,
     "2020-01-07": 2,
     "2020-01-08": -2,
   };
   
   var days = {
     0: "Sun",
     1: "Mon",
     2: "Tue",
     3: "Wed",
     4: "Thu",
     5: "Fri",
     6: "Sat",
   };
   
   var finOutput = {};
   
   function solution(input) {
     let output = {};
     let a;
     for (var key in input) {
       a = new Date(key);
       output[a.getDay()] = output[a.getDay()]
         ? output[a.getDay()] + input[key]
         : input[key];
     }
     var b = [0, 1, 2, 3, 4, 5, 6].filter(
       (e) =>
         !Object.keys(output)
           .map((i) => Number(i))
           .includes(e)
     );
     if (b.length) {
       output[b[0]] = (output[b[0] - 1] + output[b[0] + 1]) / 2;
     }
     for (var key in output) {
       finOutput[days[key]] = output[key];
     }
     return finOutput;
   }
   
   console.log(solution(input));