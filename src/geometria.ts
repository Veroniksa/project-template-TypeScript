/* 
Реализовать абстрактный класс MyGraphicsPrimitive2D 
у которого есть следующие свойства: прямоугольная область, 
описывающая примитив; метод - переместить примитив на заданное смещение;. 
От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, 
у которого есть свойство площадь. От него должны наследоваться класс MyCircle, 
у него есть свойства: центр окружности и ее радиус, 
а также должен наследоваться класс MyRectangle с свойствами: 
ширина и высота, левая верхняя граница, правая нижняя граница
*/

abstract class MyGraphicsPrimitive2D {
   /** свойства описывающие прямоугольную область примитива
      @param {number} width 
      @param {number} height
      @param {number} move метод, который перемещает примитив
      @param {number} bias заданное смещение
   */

   constructor(
      // ! написала свойство protected, чтобы была возмодность
      // ! использовать внутри самого класса или в классах наследниках
      public width: number = 8,
      public height: number = 4
   ) {}
   protected move(bias: number):number {
      return bias
   }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
   /**
      @param {number} area свойство площадь
   */
   constructor(
      public area: number,
      width: number,
      height: number
   ) {
      super(width, height)
   }
}

abstract class MyCircle extends MyAreaPrimitive2D {
   /**
      @param {number} circleCenter центр окружности
      @param {number} circleRadius  радиус окружности
   */

   constructor(
      width: number,
      height: number,
      area: number,
      public circleCenter: number,
      public circleRadius: number,
   ) {
      super(width, height, area)
   }
}

abstract class MyRectangle extends MyAreaPrimitive2D {
   /**
      @param {number} upperLeft левая верхняя граница
      @param {number} rightButtomBorder  правая нижняя граница
      @param {number} width
      @param {number} height
   */

   constructor(
      area: number,
      public width: number,
      public height: number,
      public upperLeft: number,
      public rightButtomBorder: number
   ) {
      super(width, height, area)}
}