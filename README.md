# vodooModal

A simple and pretty modal to use as modal or ajax content

## how to use
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
## animation list

-bottomToTop
_coming_