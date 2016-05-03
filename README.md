# vodooModal

A simple and pretty modal to use as modal or ajax content

```
$('element').vodooModal({
                   openWith : 'button',
                   closeWith: '.closeModal',
                   animation: 'bottomToTop',
                   onClose: function(){
                       console.log('onClose');
                   },
                   onOpen: function(){
                       console.log('onOpen');
                   }
               });
```