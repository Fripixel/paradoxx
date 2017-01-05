!function(t,i,e,n){"use strict";function s(i,e){this.element=i,this.settings=t.extend({},o,e),this._defaults=o,this._name=a,this.init()}var a="paradoxx",o={offset:10,position:1,velocity:"0.6s",delay:"0.1s",ease:"ease-in-out",opacity:1};t.extend(s.prototype,{init:function(){var i=t(this.element),e=i.find(".paradoxx__image").attr("src");i.find(".paradoxx__image").attr("src","");var n=i.find(".paradoxx__image"),s=this.settings.delay,a=this.settings.velocity,o=this.settings.opacity,r=this.settings.ease;n.css({"background-image":"url("+e+")",transition:"all "+a+" "+s+" "+r,opacity:o});var c=this.settings.offset;this.scroll(i,c)},scroll:function(n,s){var a=0,o=this;t(i).on("scroll",function(i){var s=n.find(".paradoxx__image"),r=n.height(),c=n.position().top+n.find(".paradoxx__image").position().top,u=t(e).scrollTop(),l=u,p=s.position().top;p=parseInt(p);var d={};l>a?u>=c-r&&u<=c+r&&(d=o.moveBackground(p,!0)):u>=c-r&&u<=c+r&&(d=o.moveBackground(p,!1)),s.css(d),a=l})},moveBackground:function(t,i){var e=this.getCalc(t,i),n={},s=t+e;return console.log("counter:"+t+" calc:"+e+" newValue: "+s),n.top=this.unity(s),n},getCalc:function(t,i){var e=i?1:-1,n=this.settings.offset,s=n*e;return parseInt(s)},unity:function(t,i){return i=i!=n?i:"px",t+i},removeUnity:function(t){var i=t.replace("%","");return i=i.replace("px",""),i=i.replace("em",""),i=i.replace("rem","")}}),t.fn[a]=function(i){return this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new s(this,i))})}}(jQuery,window,document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFkb3h4LmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlBsdWdpbiIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhpcyIsInNldHRpbmdzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJfZGVmYXVsdHMiLCJfbmFtZSIsInBsdWdpbk5hbWUiLCJpbml0Iiwib2Zmc2V0IiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImRlbGF5IiwiZWFzZSIsIm9wYWNpdHkiLCJwcm90b3R5cGUiLCJzcmMiLCJmaW5kIiwiYXR0ciIsImltYWdlIiwiY3NzIiwiYmFja2dyb3VuZC1pbWFnZSIsInRyYW5zaXRpb24iLCJzY3JvbGwiLCJpU2Nyb2xsUG9zIiwic2VsZiIsIm9uIiwiZSIsImVsZW1lbnRIZWlnaHQiLCJoZWlnaHQiLCJlbGVtZW50U2Nyb2xsVG9wIiwidG9wIiwid2luZG93U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiaUN1clNjcm9sbFBvcyIsImNvdW50ZXIiLCJwYXJzZUludCIsIm1vdmVCYWNrZ3JvdW5kIiwidXAiLCJjYWxjIiwiZ2V0Q2FsYyIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyIsInVuaXR5IiwibXVsdGlwbHkiLCJ2YWx1ZSIsInJlbW92ZVVuaXR5IiwicmVwbGFjZSIsImZuIiwiZWFjaCIsImRhdGEiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQVNBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBRUEsWUFjQSxTQUFBQyxHQUFBQyxFQUFBQyxHQUNBQyxLQUFBRixRQUFBQSxFQUVBRSxLQUFBQyxTQUFBUixFQUFBUyxVQUFBQyxFQUFBSixHQUNBQyxLQUFBSSxVQUFBRCxFQUNBSCxLQUFBSyxNQUFBQyxFQUNBTixLQUFBTyxPQWpCQSxHQUFBRCxHQUFBLFdBQ0FILEdBQ0FLLE9BQUEsR0FDQUMsU0FBQSxFQUNBQyxTQUFBLE9BQ0FDLE1BQUEsT0FDQUMsS0FBQSxjQUNBQyxRQUFBLEVBY0FwQixHQUFBUyxPQUFBTCxFQUFBaUIsV0FFQVAsS0FBQSxXQUVBLEdBRUFULEdBQUFMLEVBQUFPLEtBQUFGLFNBSUFpQixFQUFBakIsRUFBQWtCLEtBQUEsb0JBQUFDLEtBQUEsTUFHQW5CLEdBQUFrQixLQUFBLG9CQUFBQyxLQUFBLE1BQUEsR0FFQSxJQUFBQyxHQUFBcEIsRUFBQWtCLEtBQUEsb0JBRUFMLEVBQUFYLEtBQUFDLFNBQUFVLE1BRUFELEVBQUFWLEtBQUFDLFNBQUFTLFNBRUFHLEVBQUFiLEtBQUFDLFNBQUFZLFFBRUFELEVBQUFaLEtBQUFDLFNBQUFXLElBRUFNLEdBQUFDLEtBQ0FDLG1CQUFBLE9BQUFMLEVBQUEsSUFDQU0sV0FBQSxPQUFBWCxFQUFBLElBQUFDLEVBQUEsSUFBQUMsRUFDQUMsUUFBQUEsR0FHQSxJQUFBTCxHQUFBUixLQUFBQyxTQUFBTyxNQUVBUixNQUFBc0IsT0FBQXhCLEVBQUFVLElBSUFjLE9BQUEsU0FBQXhCLEVBQUFVLEdBRUEsR0FBQWUsR0FBQSxFQUVBQyxFQUFBeEIsSUFFQVAsR0FBQUMsR0FBQStCLEdBQUEsU0FBQSxTQUFBQyxHQUVBLEdBQUFSLEdBQUFwQixFQUFBa0IsS0FBQSxvQkFFQVcsRUFBQTdCLEVBQUE4QixTQUNBQyxFQUFBL0IsRUFBQVcsV0FBQXFCLElBQUFoQyxFQUFBa0IsS0FBQSxvQkFBQVAsV0FBQXFCLElBRUFDLEVBQUF0QyxFQUFBRSxHQUFBcUMsWUFFQUMsRUFBQUYsRUFFQUcsRUFBQWhCLEVBQUFULFdBQUFxQixHQUVBSSxHQUFBQyxTQUFBRCxFQUVBLElBQUFmLEtBRUFjLEdBQUFWLEVBQ0FRLEdBQUFGLEVBQUFGLEdBQUFJLEdBQUFGLEVBQUFGLElBRUFSLEVBQUFLLEVBQUFZLGVBQUFGLEdBQUEsSUFJQUgsR0FBQUYsRUFBQUYsR0FBQUksR0FBQUYsRUFBQUYsSUFFQVIsRUFBQUssRUFBQVksZUFBQUYsR0FBQSxJQUlBaEIsRUFBQUMsSUFBQUEsR0FFQUksRUFBQVUsS0FJQUcsZUFBQSxTQUFBRixFQUFBRyxHQUVBLEdBQUFDLEdBQUF0QyxLQUFBdUMsUUFBQUwsRUFBQUcsR0FFQWxCLEtBRUFxQixFQUFBTixFQUFBSSxDQU1BLE9BSkFHLFNBQUFDLElBQUEsV0FBQVIsRUFBQSxTQUFBSSxFQUFBLGNBQUFFLEdBRUFyQixFQUFBLElBQUFuQixLQUFBMkMsTUFBQUgsR0FFQXJCLEdBR0FvQixRQUFBLFNBQUFMLEVBQUFHLEdBQ0EsR0FBQU8sR0FBQSxFQUFBLEdBQUEsRUFDQXBDLEVBQUFSLEtBQUFDLFNBQUFPLE9BQ0E4QixFQUFBLEVBQUFNLENBQ0EsT0FBQVQsVUFBQUcsSUFHQUssTUFBQSxTQUFBRSxFQUFBRixHQUVBLE1BREFBLEdBQUFBLEdBQUEvQyxFQUFBK0MsRUFBQSxLQUNBRSxFQUFBRixHQUdBRyxZQUFBLFNBQUFELEdBQ0EsR0FBQUwsR0FBQUssRUFBQUUsUUFBQSxJQUFBLEdBSUEsT0FIQVAsR0FBQUEsRUFBQU8sUUFBQSxLQUFBLElBQ0FQLEVBQUFBLEVBQUFPLFFBQUEsS0FBQSxJQUNBUCxFQUFBQSxFQUFBTyxRQUFBLE1BQUEsT0FRQXRELEVBQUF1RCxHQUFBMUMsR0FBQSxTQUFBUCxHQUNBLE1BQUFDLE1BQUFpRCxLQUFBLFdBQ0F4RCxFQUFBeUQsS0FBQWxELEtBQUEsVUFBQU0sSUFDQWIsRUFBQXlELEtBQUFsRCxLQUFBLFVBQUFNLEVBQUEsR0FBQVQsR0FBQUcsS0FBQUQsUUFLQW9ELE9BQUF6RCxPQUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIHRoaXMuanNcbiAqIFZlcnNpb246IDIuMC4wXG4gKiBMaWtlIGEgUGFyYWxheHggZWZmZWN0IGJ1dCBub3QgOylcbiAqIEF1dGhvcjogRmVsaXBlIFZlbnR1cmlub1xuICogR2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vZnJpcGl4ZWxcbiAqIFNpdGU6IGh0dHA6Ly93d3cuZnJpcGl4ZWwuY29tLmJyL1xuICovXG47XG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVmYXVsdHMgb25jZVxuICAgIHZhciBwbHVnaW5OYW1lID0gXCJwYXJhZG94eFwiLFxuICAgICAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICdvZmZzZXQnOiAxMCxcbiAgICAgICAgICAgICdwb3NpdGlvbic6IDEsIC8vY2ltYVxuICAgICAgICAgICAgJ3ZlbG9jaXR5JzogJzAuNnMnLFxuICAgICAgICAgICAgJ2RlbGF5JzogJzAuMXMnLFxuICAgICAgICAgICAgJ2Vhc2UnOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICB9O1xuXG4gICAgLy8gVGhlIGFjdHVhbCBwbHVnaW4gY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBQbHVnaW4oZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLl9uYW1lID0gcGx1Z2luTmFtZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgUGx1Z2luLnByb3RvdHlwZSBjb25mbGljdHNcbiAgICAkLmV4dGVuZChQbHVnaW4ucHJvdG90eXBlLCB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgc3JjID0gZWxlbWVudC5maW5kKFwiLnBhcmFkb3h4X19pbWFnZVwiKS5hdHRyKFwic3JjXCIpO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBvIHNyYyBkYSBpbWFnZW1cbiAgICAgICAgICAgIGVsZW1lbnQuZmluZChcIi5wYXJhZG94eF9faW1hZ2VcIikuYXR0cihcInNyY1wiLCBcIlwiKTtcblxuICAgICAgICAgICAgdmFyIGltYWdlID0gZWxlbWVudC5maW5kKFwiLnBhcmFkb3h4X19pbWFnZVwiKTtcblxuICAgICAgICAgICAgdmFyIGRlbGF5ID0gdGhpcy5zZXR0aW5ncy5kZWxheTtcblxuICAgICAgICAgICAgdmFyIHZlbG9jaXR5ID0gdGhpcy5zZXR0aW5ncy52ZWxvY2l0eTtcblxuICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSB0aGlzLnNldHRpbmdzLm9wYWNpdHk7XG5cbiAgICAgICAgICAgIHZhciBlYXNlID0gdGhpcy5zZXR0aW5ncy5lYXNlO1xuXG4gICAgICAgICAgICBpbWFnZS5jc3Moe1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybChcIiArIHNyYyArIFwiKVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcImFsbCBcIiArIHZlbG9jaXR5ICsgXCIgXCIgKyBkZWxheSArIFwiIFwiICsgZWFzZSxcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogb3BhY2l0eSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5zZXR0aW5ncy5vZmZzZXQ7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsKGVsZW1lbnQsIG9mZnNldCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBzY3JvbGw6IGZ1bmN0aW9uKGVsZW1lbnQsIG9mZnNldCkge1xuXG4gICAgICAgICAgICB2YXIgaVNjcm9sbFBvcyA9IDA7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IGVsZW1lbnQuZmluZChcIi5wYXJhZG94eF9faW1hZ2VcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRTY3JvbGxUb3AgPSBlbGVtZW50LnBvc2l0aW9uKCkudG9wICsgZWxlbWVudC5maW5kKFwiLnBhcmFkb3h4X19pbWFnZVwiKS5wb3NpdGlvbigpLnRvcDtcblxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgICAgIHZhciBpQ3VyU2Nyb2xsUG9zID0gd2luZG93U2Nyb2xsVG9wO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSBpbWFnZS5wb3NpdGlvbigpLnRvcDtcblxuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBwYXJzZUludChjb3VudGVyKTtcblxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChpQ3VyU2Nyb2xsUG9zID4gaVNjcm9sbFBvcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvd1Njcm9sbFRvcCA+PSAoZWxlbWVudFNjcm9sbFRvcCAtIGVsZW1lbnRIZWlnaHQpKSAmJiAod2luZG93U2Nyb2xsVG9wIDw9IChlbGVtZW50U2Nyb2xsVG9wICsgZWxlbWVudEhlaWdodCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Njcm9sbGluZyBEb3duXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MgPSBzZWxmLm1vdmVCYWNrZ3JvdW5kKGNvdW50ZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvd1Njcm9sbFRvcCA+PSAoZWxlbWVudFNjcm9sbFRvcCAtIGVsZW1lbnRIZWlnaHQpKSAmJiAod2luZG93U2Nyb2xsVG9wIDw9IChlbGVtZW50U2Nyb2xsVG9wICsgZWxlbWVudEhlaWdodCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Njcm9sbGluZyBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzID0gc2VsZi5tb3ZlQmFja2dyb3VuZChjb3VudGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZS5jc3MoY3NzKTtcblxuICAgICAgICAgICAgICAgIGlTY3JvbGxQb3MgPSBpQ3VyU2Nyb2xsUG9zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZUJhY2tncm91bmQ6IGZ1bmN0aW9uKGNvdW50ZXIsIHVwKSB7XG5cbiAgICAgICAgICAgIHZhciBjYWxjID0gdGhpcy5nZXRDYWxjKGNvdW50ZXIsIHVwKTtcblxuICAgICAgICAgICAgdmFyIGNzcyA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjb3VudGVyICsgY2FsYztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VudGVyOlwiICsgY291bnRlciArIFwiIGNhbGM6XCIgKyBjYWxjICsgXCIgbmV3VmFsdWU6IFwiICsgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgICBjc3NbXCJ0b3BcIl0gPSB0aGlzLnVuaXR5KG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDYWxjOiBmdW5jdGlvbihjb3VudGVyLCB1cCkge1xuICAgICAgICAgICAgdmFyIG11bHRpcGx5ID0gKHVwKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnNldHRpbmdzLm9mZnNldDtcbiAgICAgICAgICAgIHZhciBjYWxjID0gKG9mZnNldCkgKiBtdWx0aXBseTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChjYWxjKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bml0eTogZnVuY3Rpb24odmFsdWUsIHVuaXR5KSB7XG4gICAgICAgICAgICB1bml0eSA9ICh1bml0eSAhPSB1bmRlZmluZWQpID8gdW5pdHkgOiBcInB4XCI7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyB1bml0eTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVVbml0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5yZXBsYWNlKFwicHhcIiwgXCJcIik7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnJlcGxhY2UoXCJlbVwiLCBcIlwiKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUucmVwbGFjZShcInJlbVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICAvLyBBIHJlYWxseSBsaWdodHdlaWdodCBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLFxuICAgIC8vIHByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9uc1xuICAgICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSwgbmV3IFBsdWdpbih0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7Il19
