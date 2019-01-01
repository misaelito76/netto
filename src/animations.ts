import {trigger,transition,style,animate} from '@angular/animations'

   export let fade= trigger('fade',[
    transition('void =>*',[
      style({color:'pink', opacity:0}),
      animate(2000,style({color:'magenta', opacity:1}))
    ])
    
    
    
      ]);
      export let slide= trigger('slide',[
        transition(':enter',[
          style({transform:'translateX(-10px)'}),
          animate(500)
        ]),
        transition(':leave',[
        
          animate(500, style({transform:'translateX(-100%)'}))
        ])
        
        
        
          ])
        
    
