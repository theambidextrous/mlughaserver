window.globalProvideData('slide', '{"title":"hands","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":5,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide5","width":1240,"height":800,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5lMNSHnumuy","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"5lMNSHnumuy_6oojtzT2sic":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6HCRrpJoyAu.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5Vh1hbOvnWI.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"6ob24P2TC0P"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6ob24P2TC0P"}}]}]},"ReviewInt_6VLm6kX4w0O":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5Vh1hbOvnWI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6HCRrpJoyAu"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"66AXzFXhAdu.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VLm6kX4w0O_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VLm6kX4w0O_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6VLm6kX4w0O","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6VLm6kX4w0O"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6VLm6kX4w0O"}]}]}]},"ReviewIntCorrectIncorrect_6VLm6kX4w0O":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5Vh1hbOvnWI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6HCRrpJoyAu"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6VLm6kX4w0O":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6VLm6kX4w0O"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6VLm6kX4w0O":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5Vh1hbOvnWI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6HCRrpJoyAu"},"enabled":{"type":"boolean","value":false}}]},"6VLm6kX4w0O_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"66AXzFXhAdu.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6VLm6kX4w0O"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"66AXzFXhAdu.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"66AXzFXhAdu.$AttemptCount","typea":"property","valueb":2,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6VLm6kX4w0O"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5lMNSHnumuy":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6iWIQGSNZ0T"}}]},"NavigationRestrictionPreviousSlide_5lMNSHnumuy":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6O8ud5HjYdW_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6VLm6kX4w0O"}]},{"kind":"showtimer","id":"_player.6O8ud5HjYdW_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6VLm6kX4w0O","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6VLm6kX4w0O"}],"elseActions":[{"kind":"exe_actiongroup","id":"6VLm6kX4w0O_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6VLm6kX4w0O","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6VLm6kX4w0O","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6VLm6kX4w0O","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6VLm6kX4w0O","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5lMNSHnumuy"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5lMNSHnumuy"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":23,"id":"6EGOEQRCl0f"},{"kind":"audio","assetId":24,"id":"6JNJkc5eHE7"},{"kind":"audio","assetId":25,"id":"6ob24P2TC0P"},{"kind":"audio","assetId":26,"id":"6MHHlDQAh1b"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60fUgWyN1Wi"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MC4QO3jw0n"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jSHRUTA3z2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LRFfk7kczc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69fopHGdkwa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NS2h9OCbYG"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6EGOEQRCl0f"}},{"kind":"media_play","objRef":{"type":"string","value":"6EGOEQRCl0f"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6EGOEQRCl0f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NbxpKpX78w"}}]},{"kind":"ontimelinetick","time":2000,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5Vh1hbOvnWI"}}]},{"kind":"ontimelinetick","time":3000,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6HCRrpJoyAu"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6JNJkc5eHE7"}},{"kind":"media_play","objRef":{"type":"string","value":"6JNJkc5eHE7"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6JNJkc5eHE7"}}]},{"kind":"ontimelinetick","time":4000,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6MHHlDQAh1b"}},{"kind":"media_play","objRef":{"type":"string","value":"6MHHlDQAh1b"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6MHHlDQAh1b"}}]},{"kind":"ontimelinetick","time":7750,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68t1DNdE1Za"}}]},{"kind":"ontimelinetick","time":8250,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"68t1DNdE1Za"}}]},{"kind":"ontimelinetick","time":9000,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rRYie9s15P"}}]},{"kind":"ontimelinetick","time":9625,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5rRYie9s15P"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5m7Z67LKA4e_80_DX2662_DY2662.swf","type":"normal","altText":"sunrise hd articulate.png","width":2047,"height":1563,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-81,"yPos":-16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":508,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":1016,"altText":"sunrise hd articulate.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":1016,"strokewidth":0}},"width":1331,"height":1016,"resume":true,"useHandCursor":true,"id":"60fUgWyN1Wi"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":44,"yPos":8,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":580,"rotateYPos":392,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1164,"bottom":788,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":1160,"height":784,"strokewidth":8}},"width":1160,"height":784,"resume":true,"useHandCursor":true,"id":"6MC4QO3jw0n"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6nVvM05npOJ_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1136,"yPos":698,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6jSHRUTA3z2","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WPHsHYFR6z.6iWIQGSNZ0T"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nVvM05npOJ_X_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":12,"yPos":698,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6LRFfk7kczc","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":21,"id":"01","url":"story_content/6NozMLZfxVP_80_DX568_DY568.swf","type":"normal","altText":"hand.png","width":244,"height":284,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":668,"yPos":133,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":165,"rotateYPos":192,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":330,"bottom":384,"altText":"hand.png","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":0,"yPos":0,"width":330,"height":384,"strokewidth":0}},"width":330,"height":384,"resume":true,"useHandCursor":true,"id":"69fopHGdkwa"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":22,"id":"01","url":"story_content/6NozMLZfxVP_X_80_DX568_DY568.swf","type":"normal","altText":"hand.png","width":244,"height":284,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":238,"yPos":133,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":167,"rotateYPos":192,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":334,"bottom":384,"altText":"hand.png","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":0,"yPos":0,"width":334,"height":384,"strokewidth":0}},"width":334,"height":384,"resume":true,"useHandCursor":true,"id":"6NS2h9OCbYG"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6gq0ozhvOAv_924318349","id":"01","linkId":"txt__default_5Vh1hbOvnWI","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":207,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":47}}},{"kind":"textdata","uniqueId":"6rkXkG3TwR1_-1795711789","id":"02","linkId":"txt__default_Selected_5Vh1hbOvnWI","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":257,"bottom":87,"pngfb":false,"pr":{"l":"Lib","i":48}}}],"shapemaskId":"","xPos":271,"yPos":542,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Work","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-105,"top":-33,"right":302,"bottom":89,"altText":"Work","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-105,"yPos":-33,"width":407,"height":122,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5Vh1hbOvnWI","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6HCRrpJoyAu.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6HCRrpJoyAu._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6HCRrpJoyAu"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.5lMNSHnumuy_6oojtzT2sic"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5a9hBE6Lr14_-1605311536","id":"01","linkId":"txt__default_6HCRrpJoyAu","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":189,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":21}}},{"kind":"textdata","uniqueId":"6mGXcmlIiOu_-572095039","id":"02","linkId":"txt__default_Selected_6HCRrpJoyAu","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":221,"bottom":82,"pngfb":false,"pr":{"l":"Lib","i":50}}}],"shapemaskId":"","xPos":674,"yPos":542,"tabIndex":8,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"See","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-5,"top":-23,"right":367,"bottom":89,"altText":"See","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-5,"yPos":-23,"width":372,"height":112,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"6HCRrpJoyAu","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5Vh1hbOvnWI.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5Vh1hbOvnWI._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5Vh1hbOvnWI"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.5lMNSHnumuy_6oojtzT2sic"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6NbxpKpX78w_-1328685584","id":"01","linkId":"txt__default_6NbxpKpX78w","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":588,"bottom":100,"pngfb":false,"pr":{"l":"Lib","i":51}}}],"shapemaskId":"","xPos":308,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":301.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":608,"bottom":110,"altText":"We use our hands to?","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":604,"height":106,"strokewidth":8}},"width":604,"height":106,"resume":true,"useHandCursor":true,"id":"6NbxpKpX78w"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":272,"yPos":542,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"68t1DNdE1Za"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":674,"yPos":542,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5rRYie9s15P"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6VLm6kX4w0O_CorrectReview","id":"01","linkId":"6VLm6kX4w0O_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":660,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6VLm6kX4w0O_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6VLm6kX4w0O_IncorrectReview","id":"01","linkId":"6VLm6kX4w0O_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":669,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6VLm6kX4w0O_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');