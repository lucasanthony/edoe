/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 229.0, "minX": 0.0, "maxY": 15105.0, "series": [{"data": [[0.0, 229.0], [0.1, 231.0], [0.2, 231.0], [0.3, 231.0], [0.4, 232.0], [0.5, 232.0], [0.6, 232.0], [0.7, 232.0], [0.8, 232.0], [0.9, 232.0], [1.0, 232.0], [1.1, 232.0], [1.2, 233.0], [1.3, 233.0], [1.4, 233.0], [1.5, 233.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 233.0], [2.1, 233.0], [2.2, 233.0], [2.3, 233.0], [2.4, 233.0], [2.5, 233.0], [2.6, 233.0], [2.7, 233.0], [2.8, 233.0], [2.9, 234.0], [3.0, 234.0], [3.1, 234.0], [3.2, 234.0], [3.3, 234.0], [3.4, 234.0], [3.5, 234.0], [3.6, 234.0], [3.7, 234.0], [3.8, 234.0], [3.9, 234.0], [4.0, 234.0], [4.1, 234.0], [4.2, 234.0], [4.3, 234.0], [4.4, 234.0], [4.5, 234.0], [4.6, 234.0], [4.7, 234.0], [4.8, 234.0], [4.9, 234.0], [5.0, 234.0], [5.1, 234.0], [5.2, 234.0], [5.3, 234.0], [5.4, 234.0], [5.5, 234.0], [5.6, 234.0], [5.7, 234.0], [5.8, 234.0], [5.9, 234.0], [6.0, 234.0], [6.1, 234.0], [6.2, 234.0], [6.3, 234.0], [6.4, 234.0], [6.5, 234.0], [6.6, 235.0], [6.7, 235.0], [6.8, 235.0], [6.9, 235.0], [7.0, 235.0], [7.1, 235.0], [7.2, 235.0], [7.3, 235.0], [7.4, 235.0], [7.5, 235.0], [7.6, 235.0], [7.7, 235.0], [7.8, 235.0], [7.9, 235.0], [8.0, 235.0], [8.1, 235.0], [8.2, 235.0], [8.3, 235.0], [8.4, 235.0], [8.5, 235.0], [8.6, 235.0], [8.7, 235.0], [8.8, 235.0], [8.9, 235.0], [9.0, 235.0], [9.1, 235.0], [9.2, 235.0], [9.3, 235.0], [9.4, 235.0], [9.5, 235.0], [9.6, 235.0], [9.7, 235.0], [9.8, 235.0], [9.9, 235.0], [10.0, 235.0], [10.1, 235.0], [10.2, 235.0], [10.3, 235.0], [10.4, 235.0], [10.5, 235.0], [10.6, 235.0], [10.7, 235.0], [10.8, 235.0], [10.9, 235.0], [11.0, 235.0], [11.1, 235.0], [11.2, 235.0], [11.3, 235.0], [11.4, 235.0], [11.5, 235.0], [11.6, 235.0], [11.7, 235.0], [11.8, 235.0], [11.9, 235.0], [12.0, 235.0], [12.1, 236.0], [12.2, 236.0], [12.3, 236.0], [12.4, 236.0], [12.5, 236.0], [12.6, 236.0], [12.7, 236.0], [12.8, 236.0], [12.9, 236.0], [13.0, 236.0], [13.1, 236.0], [13.2, 236.0], [13.3, 236.0], [13.4, 236.0], [13.5, 236.0], [13.6, 236.0], [13.7, 236.0], [13.8, 236.0], [13.9, 236.0], [14.0, 236.0], [14.1, 236.0], [14.2, 236.0], [14.3, 236.0], [14.4, 236.0], [14.5, 236.0], [14.6, 236.0], [14.7, 236.0], [14.8, 236.0], [14.9, 236.0], [15.0, 236.0], [15.1, 236.0], [15.2, 236.0], [15.3, 236.0], [15.4, 236.0], [15.5, 236.0], [15.6, 236.0], [15.7, 236.0], [15.8, 236.0], [15.9, 236.0], [16.0, 236.0], [16.1, 236.0], [16.2, 236.0], [16.3, 236.0], [16.4, 236.0], [16.5, 236.0], [16.6, 236.0], [16.7, 236.0], [16.8, 236.0], [16.9, 236.0], [17.0, 236.0], [17.1, 236.0], [17.2, 236.0], [17.3, 236.0], [17.4, 236.0], [17.5, 236.0], [17.6, 236.0], [17.7, 236.0], [17.8, 236.0], [17.9, 236.0], [18.0, 236.0], [18.1, 236.0], [18.2, 236.0], [18.3, 236.0], [18.4, 236.0], [18.5, 236.0], [18.6, 237.0], [18.7, 237.0], [18.8, 237.0], [18.9, 237.0], [19.0, 237.0], [19.1, 237.0], [19.2, 237.0], [19.3, 237.0], [19.4, 237.0], [19.5, 237.0], [19.6, 237.0], [19.7, 237.0], [19.8, 237.0], [19.9, 237.0], [20.0, 237.0], [20.1, 237.0], [20.2, 237.0], [20.3, 237.0], [20.4, 237.0], [20.5, 237.0], [20.6, 237.0], [20.7, 237.0], [20.8, 237.0], [20.9, 237.0], [21.0, 237.0], [21.1, 237.0], [21.2, 237.0], [21.3, 237.0], [21.4, 237.0], [21.5, 237.0], [21.6, 237.0], [21.7, 237.0], [21.8, 237.0], [21.9, 237.0], [22.0, 237.0], [22.1, 237.0], [22.2, 237.0], [22.3, 237.0], [22.4, 237.0], [22.5, 237.0], [22.6, 237.0], [22.7, 237.0], [22.8, 237.0], [22.9, 237.0], [23.0, 237.0], [23.1, 237.0], [23.2, 237.0], [23.3, 237.0], [23.4, 237.0], [23.5, 237.0], [23.6, 237.0], [23.7, 237.0], [23.8, 237.0], [23.9, 237.0], [24.0, 237.0], [24.1, 237.0], [24.2, 237.0], [24.3, 237.0], [24.4, 237.0], [24.5, 237.0], [24.6, 237.0], [24.7, 237.0], [24.8, 237.0], [24.9, 237.0], [25.0, 237.0], [25.1, 237.0], [25.2, 237.0], [25.3, 237.0], [25.4, 237.0], [25.5, 237.0], [25.6, 238.0], [25.7, 238.0], [25.8, 238.0], [25.9, 238.0], [26.0, 238.0], [26.1, 238.0], [26.2, 238.0], [26.3, 238.0], [26.4, 238.0], [26.5, 238.0], [26.6, 238.0], [26.7, 238.0], [26.8, 238.0], [26.9, 238.0], [27.0, 238.0], [27.1, 238.0], [27.2, 238.0], [27.3, 238.0], [27.4, 238.0], [27.5, 238.0], [27.6, 238.0], [27.7, 238.0], [27.8, 238.0], [27.9, 238.0], [28.0, 238.0], [28.1, 238.0], [28.2, 238.0], [28.3, 238.0], [28.4, 238.0], [28.5, 238.0], [28.6, 238.0], [28.7, 238.0], [28.8, 238.0], [28.9, 238.0], [29.0, 238.0], [29.1, 238.0], [29.2, 238.0], [29.3, 238.0], [29.4, 238.0], [29.5, 238.0], [29.6, 238.0], [29.7, 238.0], [29.8, 238.0], [29.9, 238.0], [30.0, 238.0], [30.1, 238.0], [30.2, 238.0], [30.3, 238.0], [30.4, 238.0], [30.5, 238.0], [30.6, 238.0], [30.7, 238.0], [30.8, 238.0], [30.9, 238.0], [31.0, 238.0], [31.1, 238.0], [31.2, 238.0], [31.3, 238.0], [31.4, 238.0], [31.5, 238.0], [31.6, 238.0], [31.7, 238.0], [31.8, 238.0], [31.9, 238.0], [32.0, 239.0], [32.1, 239.0], [32.2, 239.0], [32.3, 239.0], [32.4, 239.0], [32.5, 239.0], [32.6, 239.0], [32.7, 239.0], [32.8, 239.0], [32.9, 239.0], [33.0, 239.0], [33.1, 239.0], [33.2, 239.0], [33.3, 239.0], [33.4, 239.0], [33.5, 239.0], [33.6, 239.0], [33.7, 239.0], [33.8, 239.0], [33.9, 239.0], [34.0, 239.0], [34.1, 239.0], [34.2, 239.0], [34.3, 239.0], [34.4, 239.0], [34.5, 239.0], [34.6, 239.0], [34.7, 239.0], [34.8, 239.0], [34.9, 239.0], [35.0, 239.0], [35.1, 239.0], [35.2, 239.0], [35.3, 239.0], [35.4, 239.0], [35.5, 239.0], [35.6, 239.0], [35.7, 239.0], [35.8, 239.0], [35.9, 239.0], [36.0, 239.0], [36.1, 239.0], [36.2, 239.0], [36.3, 239.0], [36.4, 239.0], [36.5, 239.0], [36.6, 239.0], [36.7, 239.0], [36.8, 239.0], [36.9, 239.0], [37.0, 239.0], [37.1, 239.0], [37.2, 239.0], [37.3, 239.0], [37.4, 240.0], [37.5, 240.0], [37.6, 240.0], [37.7, 240.0], [37.8, 240.0], [37.9, 240.0], [38.0, 240.0], [38.1, 240.0], [38.2, 240.0], [38.3, 240.0], [38.4, 240.0], [38.5, 240.0], [38.6, 240.0], [38.7, 240.0], [38.8, 240.0], [38.9, 240.0], [39.0, 240.0], [39.1, 240.0], [39.2, 240.0], [39.3, 240.0], [39.4, 240.0], [39.5, 240.0], [39.6, 240.0], [39.7, 240.0], [39.8, 240.0], [39.9, 240.0], [40.0, 240.0], [40.1, 240.0], [40.2, 240.0], [40.3, 240.0], [40.4, 240.0], [40.5, 240.0], [40.6, 240.0], [40.7, 240.0], [40.8, 240.0], [40.9, 240.0], [41.0, 240.0], [41.1, 240.0], [41.2, 240.0], [41.3, 240.0], [41.4, 240.0], [41.5, 240.0], [41.6, 240.0], [41.7, 240.0], [41.8, 240.0], [41.9, 240.0], [42.0, 240.0], [42.1, 240.0], [42.2, 240.0], [42.3, 240.0], [42.4, 240.0], [42.5, 241.0], [42.6, 241.0], [42.7, 241.0], [42.8, 241.0], [42.9, 241.0], [43.0, 241.0], [43.1, 241.0], [43.2, 241.0], [43.3, 241.0], [43.4, 241.0], [43.5, 241.0], [43.6, 241.0], [43.7, 241.0], [43.8, 241.0], [43.9, 241.0], [44.0, 241.0], [44.1, 241.0], [44.2, 241.0], [44.3, 241.0], [44.4, 241.0], [44.5, 241.0], [44.6, 241.0], [44.7, 241.0], [44.8, 241.0], [44.9, 241.0], [45.0, 241.0], [45.1, 241.0], [45.2, 241.0], [45.3, 241.0], [45.4, 241.0], [45.5, 241.0], [45.6, 241.0], [45.7, 241.0], [45.8, 241.0], [45.9, 241.0], [46.0, 241.0], [46.1, 241.0], [46.2, 241.0], [46.3, 241.0], [46.4, 241.0], [46.5, 241.0], [46.6, 241.0], [46.7, 241.0], [46.8, 241.0], [46.9, 241.0], [47.0, 241.0], [47.1, 242.0], [47.2, 242.0], [47.3, 242.0], [47.4, 242.0], [47.5, 242.0], [47.6, 242.0], [47.7, 242.0], [47.8, 242.0], [47.9, 242.0], [48.0, 242.0], [48.1, 242.0], [48.2, 242.0], [48.3, 242.0], [48.4, 242.0], [48.5, 242.0], [48.6, 242.0], [48.7, 242.0], [48.8, 242.0], [48.9, 242.0], [49.0, 242.0], [49.1, 242.0], [49.2, 242.0], [49.3, 242.0], [49.4, 242.0], [49.5, 242.0], [49.6, 242.0], [49.7, 242.0], [49.8, 242.0], [49.9, 242.0], [50.0, 242.0], [50.1, 242.0], [50.2, 242.0], [50.3, 242.0], [50.4, 242.0], [50.5, 242.0], [50.6, 243.0], [50.7, 243.0], [50.8, 243.0], [50.9, 243.0], [51.0, 243.0], [51.1, 243.0], [51.2, 243.0], [51.3, 243.0], [51.4, 243.0], [51.5, 243.0], [51.6, 243.0], [51.7, 243.0], [51.8, 243.0], [51.9, 243.0], [52.0, 243.0], [52.1, 243.0], [52.2, 243.0], [52.3, 243.0], [52.4, 243.0], [52.5, 243.0], [52.6, 243.0], [52.7, 243.0], [52.8, 243.0], [52.9, 243.0], [53.0, 243.0], [53.1, 243.0], [53.2, 243.0], [53.3, 243.0], [53.4, 243.0], [53.5, 243.0], [53.6, 243.0], [53.7, 243.0], [53.8, 243.0], [53.9, 243.0], [54.0, 243.0], [54.1, 244.0], [54.2, 244.0], [54.3, 244.0], [54.4, 244.0], [54.5, 244.0], [54.6, 244.0], [54.7, 244.0], [54.8, 244.0], [54.9, 244.0], [55.0, 244.0], [55.1, 244.0], [55.2, 244.0], [55.3, 244.0], [55.4, 244.0], [55.5, 244.0], [55.6, 244.0], [55.7, 244.0], [55.8, 244.0], [55.9, 244.0], [56.0, 244.0], [56.1, 244.0], [56.2, 244.0], [56.3, 244.0], [56.4, 244.0], [56.5, 244.0], [56.6, 244.0], [56.7, 244.0], [56.8, 245.0], [56.9, 245.0], [57.0, 245.0], [57.1, 245.0], [57.2, 245.0], [57.3, 245.0], [57.4, 245.0], [57.5, 245.0], [57.6, 245.0], [57.7, 245.0], [57.8, 245.0], [57.9, 245.0], [58.0, 245.0], [58.1, 245.0], [58.2, 245.0], [58.3, 245.0], [58.4, 245.0], [58.5, 245.0], [58.6, 245.0], [58.7, 245.0], [58.8, 245.0], [58.9, 245.0], [59.0, 246.0], [59.1, 246.0], [59.2, 246.0], [59.3, 246.0], [59.4, 246.0], [59.5, 246.0], [59.6, 246.0], [59.7, 246.0], [59.8, 246.0], [59.9, 246.0], [60.0, 246.0], [60.1, 246.0], [60.2, 246.0], [60.3, 246.0], [60.4, 246.0], [60.5, 246.0], [60.6, 246.0], [60.7, 246.0], [60.8, 246.0], [60.9, 246.0], [61.0, 246.0], [61.1, 247.0], [61.2, 247.0], [61.3, 247.0], [61.4, 247.0], [61.5, 247.0], [61.6, 247.0], [61.7, 247.0], [61.8, 247.0], [61.9, 247.0], [62.0, 247.0], [62.1, 247.0], [62.2, 247.0], [62.3, 247.0], [62.4, 247.0], [62.5, 247.0], [62.6, 248.0], [62.7, 248.0], [62.8, 248.0], [62.9, 248.0], [63.0, 248.0], [63.1, 248.0], [63.2, 248.0], [63.3, 248.0], [63.4, 248.0], [63.5, 248.0], [63.6, 248.0], [63.7, 248.0], [63.8, 248.0], [63.9, 248.0], [64.0, 248.0], [64.1, 248.0], [64.2, 249.0], [64.3, 249.0], [64.4, 249.0], [64.5, 249.0], [64.6, 249.0], [64.7, 249.0], [64.8, 249.0], [64.9, 249.0], [65.0, 249.0], [65.1, 249.0], [65.2, 249.0], [65.3, 249.0], [65.4, 249.0], [65.5, 249.0], [65.6, 250.0], [65.7, 250.0], [65.8, 250.0], [65.9, 250.0], [66.0, 250.0], [66.1, 250.0], [66.2, 250.0], [66.3, 250.0], [66.4, 250.0], [66.5, 250.0], [66.6, 250.0], [66.7, 250.0], [66.8, 250.0], [66.9, 251.0], [67.0, 251.0], [67.1, 251.0], [67.2, 251.0], [67.3, 251.0], [67.4, 251.0], [67.5, 251.0], [67.6, 251.0], [67.7, 251.0], [67.8, 252.0], [67.9, 252.0], [68.0, 252.0], [68.1, 252.0], [68.2, 252.0], [68.3, 252.0], [68.4, 252.0], [68.5, 252.0], [68.6, 252.0], [68.7, 253.0], [68.8, 253.0], [68.9, 253.0], [69.0, 253.0], [69.1, 253.0], [69.2, 253.0], [69.3, 254.0], [69.4, 254.0], [69.5, 254.0], [69.6, 254.0], [69.7, 254.0], [69.8, 255.0], [69.9, 255.0], [70.0, 255.0], [70.1, 255.0], [70.2, 255.0], [70.3, 255.0], [70.4, 256.0], [70.5, 256.0], [70.6, 256.0], [70.7, 256.0], [70.8, 257.0], [70.9, 257.0], [71.0, 257.0], [71.1, 257.0], [71.2, 257.0], [71.3, 257.0], [71.4, 257.0], [71.5, 258.0], [71.6, 258.0], [71.7, 258.0], [71.8, 258.0], [71.9, 258.0], [72.0, 258.0], [72.1, 258.0], [72.2, 259.0], [72.3, 259.0], [72.4, 259.0], [72.5, 259.0], [72.6, 259.0], [72.7, 259.0], [72.8, 259.0], [72.9, 260.0], [73.0, 260.0], [73.1, 260.0], [73.2, 260.0], [73.3, 260.0], [73.4, 260.0], [73.5, 261.0], [73.6, 261.0], [73.7, 261.0], [73.8, 261.0], [73.9, 261.0], [74.0, 261.0], [74.1, 261.0], [74.2, 262.0], [74.3, 262.0], [74.4, 262.0], [74.5, 262.0], [74.6, 262.0], [74.7, 263.0], [74.8, 263.0], [74.9, 263.0], [75.0, 263.0], [75.1, 263.0], [75.2, 264.0], [75.3, 264.0], [75.4, 264.0], [75.5, 264.0], [75.6, 264.0], [75.7, 264.0], [75.8, 265.0], [75.9, 265.0], [76.0, 265.0], [76.1, 265.0], [76.2, 265.0], [76.3, 266.0], [76.4, 266.0], [76.5, 266.0], [76.6, 266.0], [76.7, 266.0], [76.8, 266.0], [76.9, 266.0], [77.0, 267.0], [77.1, 267.0], [77.2, 267.0], [77.3, 267.0], [77.4, 268.0], [77.5, 268.0], [77.6, 268.0], [77.7, 269.0], [77.8, 269.0], [77.9, 269.0], [78.0, 269.0], [78.1, 269.0], [78.2, 270.0], [78.3, 270.0], [78.4, 271.0], [78.5, 271.0], [78.6, 271.0], [78.7, 271.0], [78.8, 272.0], [78.9, 272.0], [79.0, 273.0], [79.1, 273.0], [79.2, 273.0], [79.3, 273.0], [79.4, 274.0], [79.5, 274.0], [79.6, 274.0], [79.7, 275.0], [79.8, 275.0], [79.9, 275.0], [80.0, 275.0], [80.1, 276.0], [80.2, 276.0], [80.3, 276.0], [80.4, 277.0], [80.5, 277.0], [80.6, 278.0], [80.7, 278.0], [80.8, 278.0], [80.9, 279.0], [81.0, 279.0], [81.1, 280.0], [81.2, 280.0], [81.3, 280.0], [81.4, 281.0], [81.5, 282.0], [81.6, 282.0], [81.7, 283.0], [81.8, 283.0], [81.9, 283.0], [82.0, 284.0], [82.1, 284.0], [82.2, 285.0], [82.3, 285.0], [82.4, 286.0], [82.5, 286.0], [82.6, 287.0], [82.7, 287.0], [82.8, 287.0], [82.9, 288.0], [83.0, 288.0], [83.1, 288.0], [83.2, 289.0], [83.3, 289.0], [83.4, 290.0], [83.5, 290.0], [83.6, 291.0], [83.7, 292.0], [83.8, 293.0], [83.9, 293.0], [84.0, 294.0], [84.1, 295.0], [84.2, 296.0], [84.3, 297.0], [84.4, 298.0], [84.5, 299.0], [84.6, 299.0], [84.7, 301.0], [84.8, 303.0], [84.9, 304.0], [85.0, 306.0], [85.1, 308.0], [85.2, 309.0], [85.3, 310.0], [85.4, 311.0], [85.5, 312.0], [85.6, 312.0], [85.7, 315.0], [85.8, 318.0], [85.9, 320.0], [86.0, 323.0], [86.1, 327.0], [86.2, 329.0], [86.3, 332.0], [86.4, 335.0], [86.5, 337.0], [86.6, 343.0], [86.7, 348.0], [86.8, 353.0], [86.9, 358.0], [87.0, 364.0], [87.1, 389.0], [87.2, 421.0], [87.3, 464.0], [87.4, 572.0], [87.5, 577.0], [87.6, 580.0], [87.7, 582.0], [87.8, 584.0], [87.9, 585.0], [88.0, 589.0], [88.1, 593.0], [88.2, 598.0], [88.3, 601.0], [88.4, 605.0], [88.5, 606.0], [88.6, 608.0], [88.7, 609.0], [88.8, 611.0], [88.9, 614.0], [89.0, 617.0], [89.1, 619.0], [89.2, 620.0], [89.3, 621.0], [89.4, 627.0], [89.5, 630.0], [89.6, 636.0], [89.7, 641.0], [89.8, 645.0], [89.9, 652.0], [90.0, 654.0], [90.1, 656.0], [90.2, 659.0], [90.3, 664.0], [90.4, 671.0], [90.5, 676.0], [90.6, 679.0], [90.7, 690.0], [90.8, 701.0], [90.9, 709.0], [91.0, 723.0], [91.1, 744.0], [91.2, 750.0], [91.3, 761.0], [91.4, 778.0], [91.5, 802.0], [91.6, 850.0], [91.7, 990.0], [91.8, 1081.0], [91.9, 1149.0], [92.0, 1231.0], [92.1, 1232.0], [92.2, 1233.0], [92.3, 1233.0], [92.4, 1234.0], [92.5, 1234.0], [92.6, 1235.0], [92.7, 1235.0], [92.8, 1236.0], [92.9, 1236.0], [93.0, 1236.0], [93.1, 1237.0], [93.2, 1237.0], [93.3, 1237.0], [93.4, 1238.0], [93.5, 1238.0], [93.6, 1238.0], [93.7, 1238.0], [93.8, 1239.0], [93.9, 1239.0], [94.0, 1239.0], [94.1, 1240.0], [94.2, 1241.0], [94.3, 1242.0], [94.4, 1243.0], [94.5, 1243.0], [94.6, 1244.0], [94.7, 1245.0], [94.8, 1245.0], [94.9, 1246.0], [95.0, 1248.0], [95.1, 1249.0], [95.2, 1251.0], [95.3, 1252.0], [95.4, 1253.0], [95.5, 1255.0], [95.6, 1257.0], [95.7, 1261.0], [95.8, 1263.0], [95.9, 1264.0], [96.0, 1265.0], [96.1, 1268.0], [96.2, 1273.0], [96.3, 1278.0], [96.4, 1280.0], [96.5, 1284.0], [96.6, 1288.0], [96.7, 1292.0], [96.8, 1294.0], [96.9, 1302.0], [97.0, 1311.0], [97.1, 1318.0], [97.2, 1323.0], [97.3, 1332.0], [97.4, 1338.0], [97.5, 1363.0], [97.6, 1367.0], [97.7, 1418.0], [97.8, 1599.0], [97.9, 1603.0], [98.0, 1606.0], [98.1, 1666.0], [98.2, 1700.0], [98.3, 1739.0], [98.4, 1845.0], [98.5, 1924.0], [98.6, 2028.0], [98.7, 2214.0], [98.8, 2342.0], [98.9, 3237.0], [99.0, 3238.0], [99.1, 3240.0], [99.2, 3243.0], [99.3, 3245.0], [99.4, 3250.0], [99.5, 3258.0], [99.6, 3286.0], [99.7, 3311.0], [99.8, 4107.0], [99.9, 5270.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 3485.0, "series": [{"data": [[600.0, 105.0], [700.0, 29.0], [800.0, 7.0], [900.0, 3.0], [15100.0, 1.0], [1000.0, 4.0], [1100.0, 6.0], [1200.0, 203.0], [1300.0, 32.0], [1400.0, 3.0], [1500.0, 3.0], [1600.0, 15.0], [1700.0, 9.0], [1800.0, 3.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 2.0], [3000.0, 1.0], [200.0, 3485.0], [3300.0, 5.0], [3200.0, 33.0], [3800.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [300.0, 104.0], [5200.0, 3.0], [5300.0, 2.0], [400.0, 9.0], [500.0, 36.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 93.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 3598.0, "series": [{"data": [[0.0, 3598.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 428.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 93.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 26.10810810810811, "minX": 1.57191492E12, "maxY": 49.91710338256321, "series": [{"data": [[1.57191504E12, 49.71377183967113], [1.57191492E12, 26.10810810810811], [1.57191498E12, 49.91710338256321]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191504E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 1245.0, "series": [{"data": [[2.0, 1236.0], [3.0, 1237.0], [4.0, 1245.0], [5.0, 580.0], [6.0, 244.0], [7.0, 241.0], [8.0, 384.7142857142857], [9.0, 418.0], [10.0, 239.5], [11.0, 409.5], [12.0, 238.0], [13.0, 239.0], [14.0, 243.0], [15.0, 241.0], [16.0, 239.0], [17.0, 244.0], [18.0, 238.0], [19.0, 239.0], [20.0, 242.0], [21.0, 240.42857142857142], [22.0, 242.0], [23.0, 237.5], [24.0, 236.0], [25.0, 237.0], [26.0, 237.0], [27.0, 240.0], [28.0, 244.0], [29.0, 241.5], [30.0, 239.5], [31.0, 239.0], [32.0, 239.0], [33.0, 246.33333333333334], [34.0, 244.85714285714286], [35.0, 239.75], [36.0, 254.25], [37.0, 242.0], [38.0, 242.33333333333334], [39.0, 236.66666666666666], [40.0, 239.25], [41.0, 237.5], [42.0, 240.0], [43.0, 238.25], [44.0, 238.5], [45.0, 242.25], [46.0, 238.8], [47.0, 242.16666666666669], [48.0, 250.2], [49.0, 260.8333333333333], [50.0, 388.52705410821625], [1.0, 1245.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[49.3932993445011, 385.48458363680527]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 700.5333333333333, "minX": 1.57191492E12, "maxY": 56113.26666666667, "series": [{"data": [[1.57191504E12, 52023.066666666666], [1.57191492E12, 1978.2666666666667], [1.57191498E12, 56113.26666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57191504E12, 18422.133333333335], [1.57191492E12, 700.5333333333333], [1.57191498E12, 19870.533333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191504E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 254.59459459459455, "minX": 1.57191492E12, "maxY": 399.10534429599187, "series": [{"data": [[1.57191504E12, 399.10534429599187], [1.57191492E12, 254.59459459459455], [1.57191498E12, 377.47117675083354]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191504E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 254.20270270270262, "minX": 1.57191492E12, "maxY": 396.7117163412127, "series": [{"data": [[1.57191504E12, 396.7117163412127], [1.57191492E12, 254.20270270270262], [1.57191498E12, 375.3668413530251]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191504E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 124.27027027027022, "minX": 1.57191492E12, "maxY": 230.14388489208685, "series": [{"data": [[1.57191504E12, 230.14388489208685], [1.57191492E12, 124.27027027027022], [1.57191498E12, 210.72987136731786]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191504E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 229.0, "minX": 1.57191492E12, "maxY": 15105.0, "series": [{"data": [[1.57191504E12, 5270.0], [1.57191492E12, 499.0], [1.57191498E12, 15105.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57191504E12, 231.0], [1.57191492E12, 234.0], [1.57191498E12, 229.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57191504E12, 779.7999999999997], [1.57191492E12, 257.0], [1.57191498E12, 612.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57191504E12, 3243.0], [1.57191492E12, 499.0], [1.57191498E12, 3238.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57191504E12, 1253.0], [1.57191492E12, 439.5], [1.57191498E12, 1244.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191504E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 238.0, "minX": 3.0, "maxY": 1319.5, "series": [{"data": [[32.0, 253.0], [33.0, 275.0], [34.0, 247.0], [35.0, 244.0], [37.0, 241.0], [36.0, 241.0], [39.0, 241.0], [38.0, 239.0], [41.0, 240.0], [40.0, 238.0], [42.0, 238.0], [43.0, 241.0], [44.0, 238.0], [45.0, 238.0], [3.0, 1237.0], [8.0, 382.5], [10.0, 239.0], [14.0, 273.0], [16.0, 636.5], [17.0, 630.5], [18.0, 663.5], [19.0, 282.5], [20.0, 1319.5], [21.0, 327.0], [22.0, 242.0], [24.0, 296.0], [25.0, 247.0], [27.0, 458.5], [28.0, 295.0], [30.0, 248.5], [31.0, 245.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 237.5, "minX": 3.0, "maxY": 1318.0, "series": [{"data": [[32.0, 252.5], [33.0, 275.0], [34.0, 247.0], [35.0, 244.0], [37.0, 241.0], [36.0, 241.0], [39.0, 241.0], [38.0, 239.0], [41.0, 240.0], [40.0, 237.5], [42.0, 238.0], [43.0, 241.0], [44.0, 238.0], [45.0, 238.0], [3.0, 1237.0], [8.0, 380.5], [10.0, 239.0], [14.0, 273.0], [16.0, 636.5], [17.0, 630.5], [18.0, 663.0], [19.0, 282.5], [20.0, 1318.0], [21.0, 321.0], [22.0, 242.0], [24.0, 296.0], [25.0, 247.0], [27.0, 458.5], [28.0, 295.0], [30.0, 248.0], [31.0, 245.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.35, "minX": 1.57191492E12, "maxY": 35.03333333333333, "series": [{"data": [[1.57191504E12, 32.266666666666666], [1.57191492E12, 1.35], [1.57191498E12, 35.03333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191504E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.57191492E12, "maxY": 34.983333333333334, "series": [{"data": [[1.57191504E12, 32.43333333333333], [1.57191492E12, 1.2333333333333334], [1.57191498E12, 34.983333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191504E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.57191492E12, "maxY": 34.983333333333334, "series": [{"data": [[1.57191504E12, 32.43333333333333], [1.57191492E12, 1.2333333333333334], [1.57191498E12, 34.983333333333334]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191504E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.57191492E12, "maxY": 34.983333333333334, "series": [{"data": [[1.57191504E12, 32.43333333333333], [1.57191492E12, 1.2333333333333334], [1.57191498E12, 34.983333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191504E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

