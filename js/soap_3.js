/**
 * Created by nguyen_tr on 2017/10/10.
 */
$(document).ready(function () {
    //Initialize tooltips
    // $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });
    $(".prev-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);
    });

    // Step 2-3 check button only one
    jQuery(function ($) {
        $('.button-day').click(function () {
            if($(this).hasClass('button-day') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-2-3-chooses').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }

            // Check to turn on or off button next
            if($(this).hasClass('highlight')){
                $('.step-2-3-next-step').prop('disabled', false);
            } else {
                $('.step-2-3-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-4 check button only one
    jQuery(function ($) {
        $('.button-at-time').click(function () {
            if($(this).hasClass('button-at-time') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-2-4-answers').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }

            // Check to turn on or off button next
            if($(this).hasClass('highlight')){
                $('.step-2-4-next-step').prop('disabled', false);
            } else {
                $('.step-2-4-next-step').prop('disabled', true);
            }
        })
    });

    //Step 2-5. Setup slider bar
    jQuery(function ($) {
        $('.button-slider').click(function () {
            $that = $(this);
            if($that.parent().hasClass('step-2-5-group-btn-pain-1')){
                $('.step-2-5-group-btn-pain-1 button.button-slider').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }
            if($that.parent().hasClass('step-2-5-group-btn-pain-2')){
                $('.step-2-5-group-btn-pain-2 button.button-slider').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }
            if($that.parent().hasClass('step-2-5-group-btn-pain-2')){
                $('.step-2-5-group-btn-pain-3 button.button-slider').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }

            $that.toggleClass('highlight');

            // Check to turn on or off button next
            if ($(this).hasClass('highlight')) {
                $('.step-2-5-next-step').prop('disabled', false);
            } else {
                $('.step-2-5-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-6 check button only one
    jQuery(function ($) {
        $('.button-frequency').click(function () {
            if($(this).hasClass('button-frequency') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-2-6-chooses-group-1,.step-2-6-chooses-group-2').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }

            // Check to turn on or off button next
            if($(this).hasClass('highlight')){
                $('.step-2-6-next-step').prop('disabled', false);
            } else {
                $('.step-2-6-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-7 check button
    jQuery(function ($) {
        $('.button-status').click(function () {
            if (!$(this).hasClass('button-not-choose-status')) {
                $(this).toggleClass('highlight');
                $('.button-not-choose-status').removeClass('highlight');

            }
            if ($(this).hasClass('button-not-choose-status')) {
                $('.step-2-7-chooses-group-1,.step-2-7-chooses-group-2').find('button').not('.button-not-choose-status').removeClass('highlight');
                $(this).toggleClass('highlight')
            }
            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-status').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-7-next-step').prop('disabled', false);
            } else {
                $('.step-2-7-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-8 check button only one
    jQuery(function ($) {
        $('.button-underwent').click(function () {
            if (!$(this).hasClass('button-underwent-not-choose')) {
                $(this).toggleClass('highlight');
                $('.button-underwent-not-choose').removeClass('highlight');

            }
            if ($(this).hasClass('button-underwent-not-choose')) {
                $('.step-2-8-chooses-group-1,.step-2-8-chooses-group-2,.step-2-8-chooses-group-3').find('button').not('.button-underwent-not-choose').removeClass('highlight');
                $(this).toggleClass('highlight')
            }
            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-underwent').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-8-next-step').prop('disabled', false);
            } else {
                $('.step-2-8-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-9 check button only one
    jQuery(function ($) {
        $('.button-past-underwent').click(function () {
            if (!$(this).hasClass('button-past-underwent-not-choose')) {
                $(this).toggleClass('highlight');
                $('.button-past-underwent-not-choose').removeClass('highlight');

            }
            if ($(this).hasClass('button-past-underwent-not-choose')) {
                $('.step-2-9-chooses-group-1,.step-2-9-chooses-group-2,.step-2-9-chooses-group-3').find('button').not('.button-past-underwent-not-choose').removeClass('highlight');
                $(this).toggleClass('highlight')
            }
            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-past-underwent').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-9-next-step').prop('disabled', false);
            } else {
                $('.step-2-9-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-10 check button only one
    jQuery(function ($) {
        $('.button-surgical-history').click(function () {
            if($(this).hasClass('button-surgical-history') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-2-10-chooses').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }
            // Check to turn on or off button next
            if($(this).hasClass('highlight')){
                $('.step-2-10-next-step').prop('disabled', false);
            } else {
                $('.step-2-10-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-11 check button
    jQuery(function ($) {
        $('.button-diagnostic').click(function () {
            if (!$(this).hasClass('button-diagnostic-not-say')) {
                $(this).toggleClass('highlight');
                $('.button-diagnostic-not-say').removeClass('highlight');

            }
            if ($(this).hasClass('button-diagnostic-not-say')) {
                $('.step-2-11-chooses-group-1,.step-2-11-chooses-group-2,.step-2-11-chooses-group-3').find('button').not('.button-diagnostic-not-say').removeClass('highlight');
                $(this).toggleClass('highlight')
            }

            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-diagnostic').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-11-next-step').prop('disabled', false);
            } else {
                $('.step-2-11-next-step').prop('disabled', true);
            }
        });
    });

    // Step 2-12 check button
    jQuery(function ($) {
        $('.button-reason').click(function () {
            $(this).toggleClass('highlight');

            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-reason').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-12-next-step').prop('disabled', false);
            } else {
                $('.step-2-12-next-step').prop('disabled', true);
            }
        })
    });

    // Step 2-12 check button
    jQuery(function ($) {
        $('.button-other-reason').click(function () {
            $(this).toggleClass('highlight');

            // Check to turn on or off button next
            var countItemsChoosed = 0;
            $('.button-other-reason').each(function () {
                if ($(this).hasClass('highlight')) {
                    countItemsChoosed += 1;
                }
            });
            if (countItemsChoosed > 0) {
                $('.step-2-13-next-step').prop('disabled', false);
            } else {
                $('.step-2-13-next-step').prop('disabled', true);
            }
        })
    });

    // Step 3-1 check button
    jQuery(function ($) {
        $('.button-job-question').click(function () {
            if($(this).hasClass('button-job-question') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-3-1-job-question .step-3-1-chooses').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }

        //    check and show sub job question
            if($that.hasClass('highlight')){
                if($that.val() == '2'){
                    $('.step-3-1-job-sub-question').css('display', 'block');
                } else {
                    $('.step-3-1-job-sub-question').css('display', 'none');
                }
            } else{
                $('.step-3-1-job-sub-question').css('display', 'none');
            }
        });

        $('.button-job-sub-question').click(function () {
            $(this).toggleClass('highlight');
        });

        $('.button-marriage-question').click(function () {
            if($(this).hasClass('button-marriage-question') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-3-1-marriage-question .step-3-1-chooses').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }
        });

        $('.button-job').click(function () {
            var flagJob = false,
                flagSubJob = false,
                flagMarriage = false,
                job = '';
            $('.button-job').each(function () {
                if($(this).hasClass('button-job-question') && $(this).hasClass('highlight')){
                    flagJob = true;
                    job = $(this).val();
                }

                if($(this).hasClass('button-job-sub-question') && $(this).hasClass('highlight')){
                    flagSubJob = true;
                }

                if($(this).hasClass('button-marriage-question') && $(this).hasClass('highlight')){
                    flagMarriage = true;
                }
            });
            switch (job){
                case '2':
                    if(flagMarriage && flagSubJob && flagJob){
                        $('.step-3-1-next-step').prop('disabled', false);
                    } else {
                        $('.step-3-1-next-step').prop('disabled', true);
                    }
                    break;
                case '1':
                    if(flagMarriage && flagJob){
                        $('.step-3-1-next-step').prop('disabled', false);
                    } else {
                        $('.step-3-1-next-step').prop('disabled', true);
                    }
                    break;
            }
        });

    });

    // Step 3-2 check button
    jQuery(function ($) {
        $('.button-motion-question').click(function () {
            if($(this).hasClass('button-motion-question') && !$(this).hasClass('highlight')){
                $that = $(this);

                $('.step-3-2-motion .step-3-2-chooses').find('button').removeClass('highlight');
                $that.toggleClass('highlight');
            }  else {
                $(this).toggleClass('highlight')
            }

            //    check and show sub job question
            if($that.hasClass('highlight')){
                if($that.val() == '2'){
                    $('.step-3-2-sub-motion').css('display', 'block');
                } else {
                    $('.step-3-2-sub-motion').css('display', 'none');
                }
            } else{
                $('.step-3-2-sub-motion').css('display', 'none');
            }

            // Check to turn on or off button next
            if ($(this).hasClass('highlight')) {
                switch ($that.val()) {
                    case '2':
                        if($that.val() == '2'){

                        } else{
                            $('.step-2-5-next-step').prop('disabled', true);
                        }
                        break;
                    case '1':
                        break;
                }
            }
        })
    });


    // Step 2 click to number
    if($('.step-1-1-number-input')){
        $('.dot-input').prop('disabled',true);
    }
    $('.number-input').click(function () {
        if($(this).hasClass('clear-one-button')){

        }
        if($(this).hasClass('clear-all-button')){
            $('.post-code').each(function () {
                $(this).val('');
                $('.step-1-1-next-step').prop('disabled', true);
            });
        }
    });

    $('.post-code').bind("keyup change", function () {
        var flagCount = 0;
        $('.post-code').each(function () {
            if($(this).val() != ''){
               flagCount += 1;
            }
        });
        
        if(flagCount == 7){
            $('.step-1-1-next-step').prop('disabled', false);
        } else {
            $('.step-1-1-next-step').prop('disabled', true);
        }
    });

    $('button').each(function () {
        if($(this).hasClass('step-1-1-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-1-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-2-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-3-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-4-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-5-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-6-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-7-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-8-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-9-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-10-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-11-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-12-next-step')){
            $(this).prop('disabled', false);
        }
        if($(this).hasClass('step-2-13-next-step')){
            $(this).prop('disabled', false);
        }
    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
    if(!$(elem).next().hasClass('step-process')){
        $('.wizard .wizard-inner').css('display', 'none');
    } else{
        $('.wizard .wizard-inner').css('display', 'block');
    }
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
    if(!$(elem).prev().hasClass('step-process')){
        $('.wizard .wizard-inner').css('display', 'none');
    }else{
        $('.wizard .wizard-inner').css('display', 'block');
    }
}

function inputNumberOnly() {
    return event.charCode >= 48 && event.charCode <= 57;
}




//according menu

$(document).ready(function()
{
    //Add Inactive Class To All Accordion Headers
    $('.accordion-header').toggleClass('inactive-header');

    //Set The Accordion Content Width
    var contentwidth = $('.accordion-header').width();
    $('.accordion-content').css({});

    //Open The First Accordion Section When Page Loads
    $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.accordion-content').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.accordion-header').click(function () {
        if($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }

        else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });

    return false;
});