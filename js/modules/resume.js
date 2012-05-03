/**
 * Resume
 * 
 * @property object self The module itself
 * @property object $ The jQuery object
 */
(function(self, $) {
    //Private parameters
    var options = {
       fadeIn : 1000,
       delayShow:1000
    }
    
    //Caching dom elements
    var $prof = $('#prof');
    var $tech = $('#tech');
    var $etudes = $('#etudes');
    
    /** 
     * Private initLazyLoad
     *
     * Hide dom elements
     * 
     */
    function initLazyLoad() {
        $prof.hide();
        $tech.hide();
        $tech.find('.well').hide();
        $etudes.hide();
        $etudes.find('.well').hide();
        
    }
    
    /** 
     * Private lazyLoad
     * 
     */
    function lazyLoad() {
        $prof.fadeIn(options.fadeIn);
        $tech.fadeIn(options.fadeIn);
        loadBox($tech, $etudes);
        
    }
    
    /** 
     * Private loadBox
     *
     * FadeIn elements
     * 
     */
    function loadBox($group, $next) {
        var $groupElements = $group.children('.group').find('div.well');
        var countWell = $groupElements.length;
        var delayShow = options.delayShow;
        
        $groupElements.each(function(i) {
            $(this).delay(delayShow).fadeIn(options.fadeIn);
            delayShow = delayShow + options.delayShow;
            
            if(i == (countWell-1) && $next != undefined) {
                $next.delay(delayShow).fadeIn(options.fadeIn);
                loadBox($next);
            }
        });
    }
    
    /** 
     * Public init
     *
     * Public function used for initialize the module
     * 
     * @param object params The module parameters
     * 
     */
    self.init = function(params){
        //jQuery helper for overriding options
        options = $.extend(options, params);
        
        initLazyLoad();
        lazyLoad();
        
    }
//Module auto exectution
//Add namespace for the module
})(window.Resume = window.Resume || {}, jQuery);