chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request) {
      if ($('body').children.length == 1 && $('body').children().toString() == $('pre').toString()) {
        $('pre').addClass('prettyprint').addClass('linenums').attr("_code_view_url_", request.url);

        var p = document.createElement('script');
        p.type = 'text/javascript'; p.async = true; p.charset = 'UTF-8';
        p.src = request.url+'/zepto.min.js';
        document.getElementsByTagName('head')[0].appendChild(p);

        var p = document.createElement('script');
        p.type = 'text/javascript'; p.async = true; p.charset = 'UTF-8';
        p.src = request.url+'/run_prettify.js';
        document.getElementsByTagName('head')[0].appendChild(p);

        var style = document.createElement('div');
        style.innerHTML = '<div id="lang-style" style="position: absolute; top: 0px; right: 6em; height: 30px; line-height: 30px; "><select><option>prettify</option><option>sunburst</option><option>sons-of-obsidian</option><option>desert</option><option>doxy</option></select></div>';
        document.getElementsByTagName('body')[0].appendChild(style);

        var size = document.createElement('div');
        size.innerHTML = '<div id="lang-font-size" style="position: absolute; top: 0px; right: 1em; height: 30px; line-height: 30px; "><select> <option>7pt</option> <option>8pt</option> <option>9pt</option> <option>10pt</option> <option>11pt</option> <option>12pt</option> <option>13pt</option> <option>14pt</option> <option>15pt</option> <option>16pt</option> <option>17pt</option> <option>18pt</option> <option>19pt</option> <option>20pt</option> <option>21pt</option> <option>22pt</option> <option>23pt</option> <option>24pt</option> <option>25pt</option> <option>26pt</option> <option>27pt</option> <option>28pt</option> <option>29pt</option> </select> </div> ';
        document.getElementsByTagName('body')[0].appendChild(size);

      }
      sendResponse({status: true});
    }
  }
);
