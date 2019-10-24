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
        data: {"result": {"minY": 241.0, "minX": 0.0, "maxY": 7376.0, "series": [{"data": [[0.0, 241.0], [0.1, 244.0], [0.2, 245.0], [0.3, 245.0], [0.4, 246.0], [0.5, 247.0], [0.6, 247.0], [0.7, 247.0], [0.8, 249.0], [0.9, 249.0], [1.0, 250.0], [1.1, 250.0], [1.2, 250.0], [1.3, 252.0], [1.4, 255.0], [1.5, 257.0], [1.6, 278.0], [1.7, 286.0], [1.8, 324.0], [1.9, 341.0], [2.0, 412.0], [2.1, 413.0], [2.2, 482.0], [2.3, 522.0], [2.4, 594.0], [2.5, 894.0], [2.6, 940.0], [2.7, 951.0], [2.8, 958.0], [2.9, 963.0], [3.0, 983.0], [3.1, 1004.0], [3.2, 1546.0], [3.3, 1570.0], [3.4, 1845.0], [3.5, 1853.0], [3.6, 1863.0], [3.7, 1866.0], [3.8, 1885.0], [3.9, 1887.0], [4.0, 1893.0], [4.1, 1896.0], [4.2, 1898.0], [4.3, 1899.0], [4.4, 1901.0], [4.5, 1901.0], [4.6, 1901.0], [4.7, 1901.0], [4.8, 1904.0], [4.9, 1904.0], [5.0, 1904.0], [5.1, 1905.0], [5.2, 1906.0], [5.3, 1906.0], [5.4, 1908.0], [5.5, 1908.0], [5.6, 1909.0], [5.7, 1909.0], [5.8, 1910.0], [5.9, 1910.0], [6.0, 1911.0], [6.1, 1912.0], [6.2, 1912.0], [6.3, 1912.0], [6.4, 1914.0], [6.5, 1914.0], [6.6, 1914.0], [6.7, 1914.0], [6.8, 1915.0], [6.9, 1915.0], [7.0, 1917.0], [7.1, 1917.0], [7.2, 1918.0], [7.3, 1919.0], [7.4, 1919.0], [7.5, 1919.0], [7.6, 1919.0], [7.7, 1919.0], [7.8, 1920.0], [7.9, 1921.0], [8.0, 1921.0], [8.1, 1922.0], [8.2, 1922.0], [8.3, 1922.0], [8.4, 1922.0], [8.5, 1924.0], [8.6, 1924.0], [8.7, 1924.0], [8.8, 1925.0], [8.9, 1925.0], [9.0, 1925.0], [9.1, 1926.0], [9.2, 1926.0], [9.3, 1926.0], [9.4, 1926.0], [9.5, 1927.0], [9.6, 1927.0], [9.7, 1928.0], [9.8, 1928.0], [9.9, 1928.0], [10.0, 1929.0], [10.1, 1930.0], [10.2, 1930.0], [10.3, 1931.0], [10.4, 1931.0], [10.5, 1931.0], [10.6, 1934.0], [10.7, 1934.0], [10.8, 1935.0], [10.9, 1935.0], [11.0, 1936.0], [11.1, 1936.0], [11.2, 1936.0], [11.3, 1936.0], [11.4, 1937.0], [11.5, 1937.0], [11.6, 1938.0], [11.7, 1938.0], [11.8, 1938.0], [11.9, 1938.0], [12.0, 1939.0], [12.1, 1939.0], [12.2, 1939.0], [12.3, 1939.0], [12.4, 1941.0], [12.5, 1941.0], [12.6, 1941.0], [12.7, 1941.0], [12.8, 1942.0], [12.9, 1942.0], [13.0, 1943.0], [13.1, 1943.0], [13.2, 1945.0], [13.3, 1945.0], [13.4, 1946.0], [13.5, 1947.0], [13.6, 1947.0], [13.7, 1948.0], [13.8, 1948.0], [13.9, 1948.0], [14.0, 1949.0], [14.1, 1950.0], [14.2, 1951.0], [14.3, 1951.0], [14.4, 1952.0], [14.5, 1952.0], [14.6, 1953.0], [14.7, 1953.0], [14.8, 1954.0], [14.9, 1955.0], [15.0, 1955.0], [15.1, 1956.0], [15.2, 1958.0], [15.3, 1958.0], [15.4, 1959.0], [15.5, 1960.0], [15.6, 1960.0], [15.7, 1960.0], [15.8, 1960.0], [15.9, 1961.0], [16.0, 1962.0], [16.1, 1962.0], [16.2, 1963.0], [16.3, 1963.0], [16.4, 1963.0], [16.5, 1964.0], [16.6, 1967.0], [16.7, 1967.0], [16.8, 1967.0], [16.9, 1967.0], [17.0, 1967.0], [17.1, 1968.0], [17.2, 1968.0], [17.3, 1968.0], [17.4, 1969.0], [17.5, 1969.0], [17.6, 1969.0], [17.7, 1969.0], [17.8, 1970.0], [17.9, 1970.0], [18.0, 1971.0], [18.1, 1971.0], [18.2, 1973.0], [18.3, 1974.0], [18.4, 1975.0], [18.5, 1975.0], [18.6, 1976.0], [18.7, 1977.0], [18.8, 1977.0], [18.9, 1977.0], [19.0, 1978.0], [19.1, 1978.0], [19.2, 1979.0], [19.3, 1979.0], [19.4, 1979.0], [19.5, 1980.0], [19.6, 1980.0], [19.7, 1980.0], [19.8, 1981.0], [19.9, 1981.0], [20.0, 1981.0], [20.1, 1981.0], [20.2, 1982.0], [20.3, 1982.0], [20.4, 1983.0], [20.5, 1983.0], [20.6, 1983.0], [20.7, 1985.0], [20.8, 1985.0], [20.9, 1985.0], [21.0, 1986.0], [21.1, 1986.0], [21.2, 1986.0], [21.3, 1986.0], [21.4, 1987.0], [21.5, 1987.0], [21.6, 1987.0], [21.7, 1987.0], [21.8, 1987.0], [21.9, 1987.0], [22.0, 1988.0], [22.1, 1988.0], [22.2, 1988.0], [22.3, 1988.0], [22.4, 1989.0], [22.5, 1990.0], [22.6, 1990.0], [22.7, 1990.0], [22.8, 1991.0], [22.9, 1992.0], [23.0, 1992.0], [23.1, 1993.0], [23.2, 1993.0], [23.3, 1994.0], [23.4, 1995.0], [23.5, 1995.0], [23.6, 1996.0], [23.7, 1996.0], [23.8, 1996.0], [23.9, 1997.0], [24.0, 1998.0], [24.1, 1999.0], [24.2, 2000.0], [24.3, 2000.0], [24.4, 2001.0], [24.5, 2002.0], [24.6, 2003.0], [24.7, 2004.0], [24.8, 2007.0], [24.9, 2010.0], [25.0, 2018.0], [25.1, 2428.0], [25.2, 2571.0], [25.3, 2633.0], [25.4, 2860.0], [25.5, 2883.0], [25.6, 2883.0], [25.7, 2887.0], [25.8, 2890.0], [25.9, 2891.0], [26.0, 2891.0], [26.1, 2892.0], [26.2, 2894.0], [26.3, 2895.0], [26.4, 2895.0], [26.5, 2896.0], [26.6, 2896.0], [26.7, 2897.0], [26.8, 2897.0], [26.9, 2898.0], [27.0, 2899.0], [27.1, 2900.0], [27.2, 2900.0], [27.3, 2901.0], [27.4, 2901.0], [27.5, 2901.0], [27.6, 2901.0], [27.7, 2902.0], [27.8, 2902.0], [27.9, 2903.0], [28.0, 2903.0], [28.1, 2903.0], [28.2, 2903.0], [28.3, 2903.0], [28.4, 2904.0], [28.5, 2904.0], [28.6, 2904.0], [28.7, 2904.0], [28.8, 2904.0], [28.9, 2904.0], [29.0, 2904.0], [29.1, 2905.0], [29.2, 2905.0], [29.3, 2905.0], [29.4, 2905.0], [29.5, 2906.0], [29.6, 2906.0], [29.7, 2907.0], [29.8, 2907.0], [29.9, 2907.0], [30.0, 2907.0], [30.1, 2908.0], [30.2, 2908.0], [30.3, 2908.0], [30.4, 2908.0], [30.5, 2908.0], [30.6, 2908.0], [30.7, 2909.0], [30.8, 2909.0], [30.9, 2909.0], [31.0, 2909.0], [31.1, 2910.0], [31.2, 2910.0], [31.3, 2910.0], [31.4, 2911.0], [31.5, 2911.0], [31.6, 2911.0], [31.7, 2911.0], [31.8, 2911.0], [31.9, 2911.0], [32.0, 2912.0], [32.1, 2912.0], [32.2, 2912.0], [32.3, 2912.0], [32.4, 2912.0], [32.5, 2912.0], [32.6, 2913.0], [32.7, 2913.0], [32.8, 2913.0], [32.9, 2913.0], [33.0, 2913.0], [33.1, 2914.0], [33.2, 2914.0], [33.3, 2914.0], [33.4, 2914.0], [33.5, 2914.0], [33.6, 2914.0], [33.7, 2915.0], [33.8, 2915.0], [33.9, 2915.0], [34.0, 2915.0], [34.1, 2916.0], [34.2, 2916.0], [34.3, 2916.0], [34.4, 2916.0], [34.5, 2917.0], [34.6, 2917.0], [34.7, 2917.0], [34.8, 2917.0], [34.9, 2917.0], [35.0, 2917.0], [35.1, 2918.0], [35.2, 2918.0], [35.3, 2918.0], [35.4, 2918.0], [35.5, 2919.0], [35.6, 2919.0], [35.7, 2919.0], [35.8, 2919.0], [35.9, 2919.0], [36.0, 2919.0], [36.1, 2920.0], [36.2, 2920.0], [36.3, 2920.0], [36.4, 2920.0], [36.5, 2920.0], [36.6, 2920.0], [36.7, 2921.0], [36.8, 2921.0], [36.9, 2921.0], [37.0, 2921.0], [37.1, 2921.0], [37.2, 2921.0], [37.3, 2921.0], [37.4, 2922.0], [37.5, 2922.0], [37.6, 2922.0], [37.7, 2923.0], [37.8, 2923.0], [37.9, 2923.0], [38.0, 2923.0], [38.1, 2923.0], [38.2, 2923.0], [38.3, 2923.0], [38.4, 2923.0], [38.5, 2923.0], [38.6, 2924.0], [38.7, 2924.0], [38.8, 2924.0], [38.9, 2924.0], [39.0, 2924.0], [39.1, 2924.0], [39.2, 2925.0], [39.3, 2925.0], [39.4, 2925.0], [39.5, 2925.0], [39.6, 2925.0], [39.7, 2925.0], [39.8, 2925.0], [39.9, 2926.0], [40.0, 2926.0], [40.1, 2926.0], [40.2, 2926.0], [40.3, 2926.0], [40.4, 2927.0], [40.5, 2927.0], [40.6, 2927.0], [40.7, 2928.0], [40.8, 2928.0], [40.9, 2928.0], [41.0, 2928.0], [41.1, 2929.0], [41.2, 2929.0], [41.3, 2929.0], [41.4, 2929.0], [41.5, 2930.0], [41.6, 2930.0], [41.7, 2931.0], [41.8, 2931.0], [41.9, 2931.0], [42.0, 2931.0], [42.1, 2932.0], [42.2, 2932.0], [42.3, 2932.0], [42.4, 2932.0], [42.5, 2932.0], [42.6, 2933.0], [42.7, 2933.0], [42.8, 2933.0], [42.9, 2933.0], [43.0, 2933.0], [43.1, 2934.0], [43.2, 2934.0], [43.3, 2934.0], [43.4, 2934.0], [43.5, 2934.0], [43.6, 2934.0], [43.7, 2935.0], [43.8, 2935.0], [43.9, 2935.0], [44.0, 2935.0], [44.1, 2935.0], [44.2, 2935.0], [44.3, 2936.0], [44.4, 2936.0], [44.5, 2936.0], [44.6, 2936.0], [44.7, 2936.0], [44.8, 2936.0], [44.9, 2937.0], [45.0, 2938.0], [45.1, 2938.0], [45.2, 2938.0], [45.3, 2938.0], [45.4, 2939.0], [45.5, 2939.0], [45.6, 2939.0], [45.7, 2939.0], [45.8, 2939.0], [45.9, 2939.0], [46.0, 2939.0], [46.1, 2940.0], [46.2, 2940.0], [46.3, 2940.0], [46.4, 2941.0], [46.5, 2941.0], [46.6, 2941.0], [46.7, 2941.0], [46.8, 2941.0], [46.9, 2942.0], [47.0, 2942.0], [47.1, 2942.0], [47.2, 2942.0], [47.3, 2943.0], [47.4, 2943.0], [47.5, 2943.0], [47.6, 2943.0], [47.7, 2943.0], [47.8, 2943.0], [47.9, 2944.0], [48.0, 2944.0], [48.1, 2944.0], [48.2, 2944.0], [48.3, 2944.0], [48.4, 2944.0], [48.5, 2945.0], [48.6, 2945.0], [48.7, 2945.0], [48.8, 2945.0], [48.9, 2945.0], [49.0, 2945.0], [49.1, 2946.0], [49.2, 2946.0], [49.3, 2946.0], [49.4, 2946.0], [49.5, 2946.0], [49.6, 2947.0], [49.7, 2947.0], [49.8, 2947.0], [49.9, 2947.0], [50.0, 2947.0], [50.1, 2947.0], [50.2, 2947.0], [50.3, 2947.0], [50.4, 2948.0], [50.5, 2948.0], [50.6, 2949.0], [50.7, 2949.0], [50.8, 2949.0], [50.9, 2949.0], [51.0, 2949.0], [51.1, 2950.0], [51.2, 2950.0], [51.3, 2950.0], [51.4, 2950.0], [51.5, 2950.0], [51.6, 2951.0], [51.7, 2952.0], [51.8, 2952.0], [51.9, 2952.0], [52.0, 2952.0], [52.1, 2952.0], [52.2, 2952.0], [52.3, 2952.0], [52.4, 2953.0], [52.5, 2953.0], [52.6, 2953.0], [52.7, 2954.0], [52.8, 2954.0], [52.9, 2954.0], [53.0, 2954.0], [53.1, 2954.0], [53.2, 2955.0], [53.3, 2955.0], [53.4, 2955.0], [53.5, 2955.0], [53.6, 2955.0], [53.7, 2955.0], [53.8, 2956.0], [53.9, 2956.0], [54.0, 2956.0], [54.1, 2956.0], [54.2, 2957.0], [54.3, 2957.0], [54.4, 2957.0], [54.5, 2958.0], [54.6, 2958.0], [54.7, 2958.0], [54.8, 2958.0], [54.9, 2958.0], [55.0, 2959.0], [55.1, 2959.0], [55.2, 2959.0], [55.3, 2959.0], [55.4, 2959.0], [55.5, 2959.0], [55.6, 2959.0], [55.7, 2959.0], [55.8, 2960.0], [55.9, 2960.0], [56.0, 2960.0], [56.1, 2960.0], [56.2, 2961.0], [56.3, 2961.0], [56.4, 2961.0], [56.5, 2961.0], [56.6, 2961.0], [56.7, 2961.0], [56.8, 2961.0], [56.9, 2961.0], [57.0, 2962.0], [57.1, 2962.0], [57.2, 2962.0], [57.3, 2962.0], [57.4, 2962.0], [57.5, 2962.0], [57.6, 2962.0], [57.7, 2962.0], [57.8, 2963.0], [57.9, 2963.0], [58.0, 2963.0], [58.1, 2963.0], [58.2, 2964.0], [58.3, 2964.0], [58.4, 2964.0], [58.5, 2964.0], [58.6, 2965.0], [58.7, 2965.0], [58.8, 2965.0], [58.9, 2965.0], [59.0, 2965.0], [59.1, 2966.0], [59.2, 2967.0], [59.3, 2967.0], [59.4, 2967.0], [59.5, 2967.0], [59.6, 2967.0], [59.7, 2968.0], [59.8, 2968.0], [59.9, 2968.0], [60.0, 2969.0], [60.1, 2969.0], [60.2, 2969.0], [60.3, 2969.0], [60.4, 2969.0], [60.5, 2969.0], [60.6, 2969.0], [60.7, 2969.0], [60.8, 2969.0], [60.9, 2969.0], [61.0, 2970.0], [61.1, 2970.0], [61.2, 2970.0], [61.3, 2970.0], [61.4, 2970.0], [61.5, 2970.0], [61.6, 2971.0], [61.7, 2971.0], [61.8, 2971.0], [61.9, 2971.0], [62.0, 2971.0], [62.1, 2971.0], [62.2, 2972.0], [62.3, 2972.0], [62.4, 2972.0], [62.5, 2972.0], [62.6, 2972.0], [62.7, 2973.0], [62.8, 2973.0], [62.9, 2973.0], [63.0, 2973.0], [63.1, 2973.0], [63.2, 2973.0], [63.3, 2973.0], [63.4, 2974.0], [63.5, 2974.0], [63.6, 2974.0], [63.7, 2974.0], [63.8, 2974.0], [63.9, 2975.0], [64.0, 2975.0], [64.1, 2975.0], [64.2, 2975.0], [64.3, 2975.0], [64.4, 2975.0], [64.5, 2976.0], [64.6, 2976.0], [64.7, 2976.0], [64.8, 2976.0], [64.9, 2976.0], [65.0, 2977.0], [65.1, 2977.0], [65.2, 2977.0], [65.3, 2977.0], [65.4, 2977.0], [65.5, 2977.0], [65.6, 2977.0], [65.7, 2978.0], [65.8, 2978.0], [65.9, 2978.0], [66.0, 2979.0], [66.1, 2979.0], [66.2, 2979.0], [66.3, 2979.0], [66.4, 2980.0], [66.5, 2980.0], [66.6, 2980.0], [66.7, 2980.0], [66.8, 2980.0], [66.9, 2980.0], [67.0, 2980.0], [67.1, 2980.0], [67.2, 2980.0], [67.3, 2980.0], [67.4, 2981.0], [67.5, 2981.0], [67.6, 2981.0], [67.7, 2981.0], [67.8, 2981.0], [67.9, 2981.0], [68.0, 2981.0], [68.1, 2981.0], [68.2, 2982.0], [68.3, 2982.0], [68.4, 2982.0], [68.5, 2982.0], [68.6, 2982.0], [68.7, 2982.0], [68.8, 2983.0], [68.9, 2983.0], [69.0, 2983.0], [69.1, 2983.0], [69.2, 2983.0], [69.3, 2983.0], [69.4, 2984.0], [69.5, 2984.0], [69.6, 2984.0], [69.7, 2984.0], [69.8, 2985.0], [69.9, 2985.0], [70.0, 2985.0], [70.1, 2985.0], [70.2, 2986.0], [70.3, 2986.0], [70.4, 2986.0], [70.5, 2986.0], [70.6, 2986.0], [70.7, 2986.0], [70.8, 2987.0], [70.9, 2987.0], [71.0, 2987.0], [71.1, 2987.0], [71.2, 2988.0], [71.3, 2988.0], [71.4, 2988.0], [71.5, 2988.0], [71.6, 2988.0], [71.7, 2988.0], [71.8, 2988.0], [71.9, 2988.0], [72.0, 2989.0], [72.1, 2989.0], [72.2, 2989.0], [72.3, 2989.0], [72.4, 2989.0], [72.5, 2989.0], [72.6, 2990.0], [72.7, 2990.0], [72.8, 2990.0], [72.9, 2991.0], [73.0, 2991.0], [73.1, 2991.0], [73.2, 2992.0], [73.3, 2992.0], [73.4, 2993.0], [73.5, 2993.0], [73.6, 2993.0], [73.7, 2993.0], [73.8, 2993.0], [73.9, 2993.0], [74.0, 2994.0], [74.1, 2994.0], [74.2, 2994.0], [74.3, 2994.0], [74.4, 2994.0], [74.5, 2994.0], [74.6, 2994.0], [74.7, 2994.0], [74.8, 2995.0], [74.9, 2995.0], [75.0, 2995.0], [75.1, 2995.0], [75.2, 2995.0], [75.3, 2996.0], [75.4, 2996.0], [75.5, 2996.0], [75.6, 2996.0], [75.7, 2997.0], [75.8, 2997.0], [75.9, 2998.0], [76.0, 2998.0], [76.1, 2998.0], [76.2, 2998.0], [76.3, 2999.0], [76.4, 2999.0], [76.5, 2999.0], [76.6, 3000.0], [76.7, 3000.0], [76.8, 3001.0], [76.9, 3001.0], [77.0, 3002.0], [77.1, 3002.0], [77.2, 3004.0], [77.3, 3005.0], [77.4, 3006.0], [77.5, 3006.0], [77.6, 3008.0], [77.7, 3009.0], [77.8, 3009.0], [77.9, 3011.0], [78.0, 3012.0], [78.1, 3014.0], [78.2, 3015.0], [78.3, 3019.0], [78.4, 3020.0], [78.5, 3026.0], [78.6, 3033.0], [78.7, 3042.0], [78.8, 3050.0], [78.9, 3128.0], [79.0, 3281.0], [79.1, 3369.0], [79.2, 3389.0], [79.3, 3397.0], [79.4, 3407.0], [79.5, 3418.0], [79.6, 3434.0], [79.7, 3673.0], [79.8, 3831.0], [79.9, 3837.0], [80.0, 3867.0], [80.1, 3879.0], [80.2, 3887.0], [80.3, 3894.0], [80.4, 3895.0], [80.5, 3896.0], [80.6, 3898.0], [80.7, 3898.0], [80.8, 3899.0], [80.9, 3900.0], [81.0, 3900.0], [81.1, 3902.0], [81.2, 3902.0], [81.3, 3905.0], [81.4, 3907.0], [81.5, 3907.0], [81.6, 3907.0], [81.7, 3908.0], [81.8, 3909.0], [81.9, 3910.0], [82.0, 3910.0], [82.1, 3910.0], [82.2, 3910.0], [82.3, 3911.0], [82.4, 3911.0], [82.5, 3911.0], [82.6, 3912.0], [82.7, 3913.0], [82.8, 3913.0], [82.9, 3914.0], [83.0, 3915.0], [83.1, 3915.0], [83.2, 3915.0], [83.3, 3917.0], [83.4, 3917.0], [83.5, 3918.0], [83.6, 3918.0], [83.7, 3918.0], [83.8, 3919.0], [83.9, 3920.0], [84.0, 3920.0], [84.1, 3920.0], [84.2, 3920.0], [84.3, 3921.0], [84.4, 3922.0], [84.5, 3922.0], [84.6, 3922.0], [84.7, 3923.0], [84.8, 3923.0], [84.9, 3923.0], [85.0, 3924.0], [85.1, 3925.0], [85.2, 3925.0], [85.3, 3925.0], [85.4, 3926.0], [85.5, 3927.0], [85.6, 3927.0], [85.7, 3928.0], [85.8, 3928.0], [85.9, 3930.0], [86.0, 3930.0], [86.1, 3931.0], [86.2, 3932.0], [86.3, 3932.0], [86.4, 3934.0], [86.5, 3935.0], [86.6, 3935.0], [86.7, 3935.0], [86.8, 3935.0], [86.9, 3937.0], [87.0, 3937.0], [87.1, 3938.0], [87.2, 3938.0], [87.3, 3938.0], [87.4, 3939.0], [87.5, 3939.0], [87.6, 3939.0], [87.7, 3940.0], [87.8, 3940.0], [87.9, 3941.0], [88.0, 3942.0], [88.1, 3942.0], [88.2, 3943.0], [88.3, 3943.0], [88.4, 3944.0], [88.5, 3944.0], [88.6, 3944.0], [88.7, 3945.0], [88.8, 3946.0], [88.9, 3947.0], [89.0, 3947.0], [89.1, 3948.0], [89.2, 3948.0], [89.3, 3948.0], [89.4, 3950.0], [89.5, 3951.0], [89.6, 3952.0], [89.7, 3952.0], [89.8, 3952.0], [89.9, 3953.0], [90.0, 3953.0], [90.1, 3954.0], [90.2, 3954.0], [90.3, 3955.0], [90.4, 3955.0], [90.5, 3960.0], [90.6, 3960.0], [90.7, 3962.0], [90.8, 3963.0], [90.9, 3964.0], [91.0, 3965.0], [91.1, 3965.0], [91.2, 3965.0], [91.3, 3966.0], [91.4, 3966.0], [91.5, 3967.0], [91.6, 3967.0], [91.7, 3968.0], [91.8, 3968.0], [91.9, 3969.0], [92.0, 3970.0], [92.1, 3970.0], [92.2, 3970.0], [92.3, 3972.0], [92.4, 3972.0], [92.5, 3973.0], [92.6, 3974.0], [92.7, 3974.0], [92.8, 3975.0], [92.9, 3975.0], [93.0, 3975.0], [93.1, 3976.0], [93.2, 3976.0], [93.3, 3977.0], [93.4, 3978.0], [93.5, 3978.0], [93.6, 3979.0], [93.7, 3979.0], [93.8, 3980.0], [93.9, 3982.0], [94.0, 3982.0], [94.1, 3984.0], [94.2, 3985.0], [94.3, 3987.0], [94.4, 3987.0], [94.5, 3990.0], [94.6, 3990.0], [94.7, 3994.0], [94.8, 3994.0], [94.9, 3997.0], [95.0, 3998.0], [95.1, 3999.0], [95.2, 4000.0], [95.3, 4004.0], [95.4, 4005.0], [95.5, 4005.0], [95.6, 4006.0], [95.7, 4011.0], [95.8, 4014.0], [95.9, 4017.0], [96.0, 4019.0], [96.1, 4180.0], [96.2, 4409.0], [96.3, 4554.0], [96.4, 4559.0], [96.5, 4789.0], [96.6, 4811.0], [96.7, 4910.0], [96.8, 4911.0], [96.9, 4924.0], [97.0, 4929.0], [97.1, 4936.0], [97.2, 4936.0], [97.3, 4943.0], [97.4, 4945.0], [97.5, 4945.0], [97.6, 4946.0], [97.7, 4968.0], [97.8, 4978.0], [97.9, 4993.0], [98.0, 5005.0], [98.1, 5570.0], [98.2, 5587.0], [98.3, 5671.0], [98.4, 5690.0], [98.5, 5795.0], [98.6, 5805.0], [98.7, 5857.0], [98.8, 5892.0], [98.9, 5939.0], [99.0, 5982.0], [99.1, 5987.0], [99.2, 5987.0], [99.3, 6094.0], [99.4, 6283.0], [99.5, 6492.0], [99.6, 6688.0], [99.7, 6886.0], [99.8, 6906.0], [99.9, 7184.0], [100.0, 7376.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 743.0, "series": [{"data": [[800.0, 1.0], [900.0, 8.0], [1000.0, 2.0], [1500.0, 3.0], [1800.0, 15.0], [1900.0, 297.0], [2000.0, 14.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 26.0], [2900.0, 743.0], [3000.0, 35.0], [3100.0, 1.0], [200.0, 26.0], [3300.0, 5.0], [3200.0, 1.0], [3400.0, 4.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 17.0], [3900.0, 214.0], [4000.0, 14.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 1.0], [300.0, 4.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 20.0], [5000.0, 1.0], [5500.0, 3.0], [5400.0, 1.0], [5600.0, 2.0], [5800.0, 4.0], [5700.0, 2.0], [5900.0, 6.0], [6000.0, 2.0], [6200.0, 1.0], [400.0, 4.0], [6400.0, 2.0], [6600.0, 1.0], [6800.0, 2.0], [6900.0, 2.0], [7100.0, 1.0], [7300.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 1454.0, "series": [{"data": [[0.0, 34.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 1454.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.46774193548388, "minX": 1.57191522E12, "maxY": 50.0, "series": [{"data": [[1.57191522E12, 40.46774193548388], [1.57191528E12, 50.0], [1.57191534E12, 48.21767594108019]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191534E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 243.5, "minX": 2.0, "maxY": 3962.0, "series": [{"data": [[33.0, 3295.6666666666665], [2.0, 1930.0], [35.0, 3930.0], [34.0, 3962.0], [36.0, 1067.0], [50.0, 2989.0230769230757], [4.0, 2978.0], [5.0, 1910.0], [6.0, 349.75], [7.0, 1519.5], [8.0, 257.0], [9.0, 1399.0], [10.0, 1109.0], [11.0, 248.0], [12.0, 247.0], [13.0, 250.0], [14.0, 245.0], [15.0, 2293.75], [16.0, 1717.3333333333335], [17.0, 1606.0], [18.0, 247.0], [19.0, 1389.875], [20.0, 1155.6666666666665], [21.0, 243.5], [22.0, 3026.0], [24.0, 2649.3333333333335], [25.0, 700.0], [26.0, 803.0], [27.0, 1098.0], [28.0, 2950.0], [30.0, 2993.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[48.48801597869502, 2916.7217043941423]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 834.9333333333333, "minX": 1.57191522E12, "maxY": 7337.633333333333, "series": [{"data": [[1.57191522E12, 834.9333333333333], [1.57191528E12, 5164.466666666666], [1.57191534E12, 4114.066666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57191522E12, 1186.2666666666667], [1.57191528E12, 7337.633333333333], [1.57191534E12, 5845.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191534E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2896.3927986906738, "minX": 1.57191522E12, "maxY": 2997.6451612903224, "series": [{"data": [[1.57191522E12, 2997.6451612903224], [1.57191528E12, 2919.833116036504], [1.57191534E12, 2896.3927986906738]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191534E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2896.301145662848, "minX": 1.57191522E12, "maxY": 2997.540322580645, "series": [{"data": [[1.57191522E12, 2997.540322580645], [1.57191528E12, 2919.6492829204717], [1.57191534E12, 2896.301145662848]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191534E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 115.1849427168576, "minX": 1.57191522E12, "maxY": 143.46284224250337, "series": [{"data": [[1.57191522E12, 116.76612903225809], [1.57191528E12, 143.46284224250337], [1.57191534E12, 115.1849427168576]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191534E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 241.0, "minX": 1.57191522E12, "maxY": 7376.0, "series": [{"data": [[1.57191522E12, 7376.0], [1.57191528E12, 5829.0], [1.57191534E12, 4993.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57191522E12, 241.0], [1.57191528E12, 419.0], [1.57191534E12, 922.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57191522E12, 6033.0], [1.57191528E12, 3947.0], [1.57191534E12, 3937.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57191522E12, 7328.0], [1.57191528E12, 4943.639999999999], [1.57191534E12, 4021.56]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57191522E12, 6831.25], [1.57191528E12, 3975.6], [1.57191534E12, 3971.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191534E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1067.0, "minX": 1.0, "maxY": 2998.5, "series": [{"data": [[8.0, 2901.5], [2.0, 2898.0], [9.0, 2938.5], [10.0, 2936.5], [11.0, 2942.5], [12.0, 2971.0], [13.0, 2939.0], [14.0, 2930.0], [15.0, 2955.0], [1.0, 1067.0], [4.0, 2916.5], [16.0, 2956.0], [17.0, 2965.0], [18.0, 2943.0], [19.0, 2946.0], [5.0, 2092.0], [20.0, 2977.0], [21.0, 2998.5], [22.0, 2975.0], [23.0, 2982.5], [6.0, 2975.5], [7.0, 2897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1067.0, "minX": 1.0, "maxY": 2998.5, "series": [{"data": [[8.0, 2901.5], [2.0, 2897.5], [9.0, 2938.5], [10.0, 2936.5], [11.0, 2942.5], [12.0, 2970.5], [13.0, 2939.0], [14.0, 2930.0], [15.0, 2955.0], [1.0, 1067.0], [4.0, 2916.0], [16.0, 2956.0], [17.0, 2965.0], [18.0, 2942.5], [19.0, 2946.0], [5.0, 2092.0], [20.0, 2977.0], [21.0, 2998.5], [22.0, 2975.0], [23.0, 2982.5], [6.0, 2975.5], [7.0, 2897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8, "minX": 1.57191522E12, "maxY": 12.683333333333334, "series": [{"data": [[1.57191522E12, 2.8], [1.57191528E12, 12.683333333333334], [1.57191534E12, 9.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191534E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.57191522E12, "maxY": 12.783333333333333, "series": [{"data": [[1.57191522E12, 2.066666666666667], [1.57191528E12, 12.783333333333333], [1.57191534E12, 10.183333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57191534E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.57191522E12, "maxY": 12.783333333333333, "series": [{"data": [[1.57191522E12, 2.066666666666667], [1.57191528E12, 12.783333333333333], [1.57191534E12, 10.183333333333334]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191534E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.066666666666667, "minX": 1.57191522E12, "maxY": 12.783333333333333, "series": [{"data": [[1.57191522E12, 2.066666666666667], [1.57191528E12, 12.783333333333333], [1.57191534E12, 10.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57191534E12, "title": "Total Transactions Per Second"}},
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

