window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":7,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide7","width":1300,"height":812,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6K9COKPF5Ep","actionGroups":{"6K9COKPF5Ep_63pmz9I8ICk":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6XQUMAve6Ue.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"658d2ftiHWZ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"5YlFvf4zpAp"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5YlFvf4zpAp"}}]}]},"ReviewInt_6Ww7hrz03UG":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"658d2ftiHWZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6XQUMAve6Ue"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Opm8rp28XA.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Ww7hrz03UG_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Ww7hrz03UG_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6Ww7hrz03UG","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6Ww7hrz03UG"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6Ww7hrz03UG"}]}]}]},"ReviewIntCorrectIncorrect_6Ww7hrz03UG":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"658d2ftiHWZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6XQUMAve6Ue"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6Ww7hrz03UG":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6Ww7hrz03UG"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6Ww7hrz03UG":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"658d2ftiHWZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6XQUMAve6Ue"},"enabled":{"type":"boolean","value":false}}]},"6Ww7hrz03UG_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Opm8rp28XA.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6Ww7hrz03UG"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Opm8rp28XA.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Opm8rp28XA.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6Ww7hrz03UG"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6K9COKPF5Ep":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.60E7SlAlyCO"}}]},"NavigationRestrictionPreviousSlide_6K9COKPF5Ep":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5dfm3L3Xzzk_timer"},{"kind":"showtimer","id":"_player.5dfm3L3Xzzk_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mo3gJ6g4S5","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mo3gJ6g4S5","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6Ww7hrz03UG","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6Ww7hrz03UG"}],"elseActions":[{"kind":"exe_actiongroup","id":"6Ww7hrz03UG_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6Ww7hrz03UG","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6Ww7hrz03UG","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6Ww7hrz03UG","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6Ww7hrz03UG","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6K9COKPF5Ep"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6K9COKPF5Ep"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":39,"id":"6bQH8jLtKmA"},{"kind":"audio","assetId":40,"id":"5YlFvf4zpAp"},{"kind":"audio","assetId":41,"id":"5ZcOrF6TNhq"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hr65k18Jvj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iAZrPVPVSd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hcYayYgGwz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BL7iz3ZqUd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pTidw1GXzP"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XQUMAve6Ue"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"658d2ftiHWZ"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6bQH8jLtKmA"}},{"kind":"media_play","objRef":{"type":"string","value":"6bQH8jLtKmA"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6bQH8jLtKmA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"613cWLR1kHE"}}]},{"kind":"ontimelinetick","time":2250,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5ZcOrF6TNhq"}},{"kind":"media_play","objRef":{"type":"string","value":"5ZcOrF6TNhq"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5ZcOrF6TNhq"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5xwaNGI8QS5_72_DX2480_DY2480.swf","type":"normal","altText":"bg-01.png","width":1240,"height":800,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-9,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":415,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1300,"bottom":830,"altText":"bg-01.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1300,"height":830,"strokewidth":0}},"width":1300,"height":830,"resume":true,"useHandCursor":true,"id":"6hr65k18Jvj"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":66,"yPos":37,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":581.5,"rotateYPos":343,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1168,"bottom":691,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":0,"yPos":0,"width":1163,"height":686,"strokewidth":8}},"width":1163,"height":686,"resume":true,"useHandCursor":true,"id":"5iAZrPVPVSd"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6hcYayYgGwz_-828781","id":"01","linkId":"txt__default_6hcYayYgGwz","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":672,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":43}}}],"shapemaskId":"","xPos":295,"yPos":20,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":363,"rotateYPos":54.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-6,"top":-6,"right":733,"bottom":116,"altText":"Identify seven boys","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":0,"yPos":0,"width":727,"height":110,"strokewidth":10}},"width":727,"height":110,"resume":true,"useHandCursor":true,"id":"6hcYayYgGwz"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":3,"id":"01","url":"story_content/6nVvM05npOJ_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1179,"yPos":706,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6BL7iz3ZqUd","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5cskvBHmA3j.60E7SlAlyCO"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/6nVvM05npOJ_X_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":46,"yPos":706,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":9}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6pTidw1GXzP","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":37,"id":"01","url":"story_content/5q5PleesJAI_72_DX776_DY776.swf","type":"normal","altText":"5boys.png","width":236,"height":428,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":796,"yPos":218,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":107,"rotateYPos":194,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":214,"bottom":388,"altText":"5boys.png","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":0,"yPos":0,"width":214,"height":388,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":214,"bottom":388,"altText":"5boys.png","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":0,"yPos":0,"width":214,"height":388,"strokewidth":0}}}],"width":214,"height":388,"resume":true,"useHandCursor":true,"id":"6XQUMAve6Ue","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.658d2ftiHWZ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.658d2ftiHWZ._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.658d2ftiHWZ"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6K9COKPF5Ep_63pmz9I8ICk"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":38,"id":"01","url":"story_content/6oPxKTR4WJg_72_DX780_DY780.swf","type":"normal","altText":"7boys.png","width":322,"height":428,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":217,"yPos":216,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":146.5,"rotateYPos":195,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":293,"bottom":390,"altText":"7boys.png","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":0,"yPos":0,"width":293,"height":390,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":293,"bottom":390,"altText":"7boys.png","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":0,"yPos":0,"width":293,"height":390,"strokewidth":0}}}],"width":293,"height":390,"resume":true,"useHandCursor":true,"id":"658d2ftiHWZ","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6XQUMAve6Ue.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6XQUMAve6Ue._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6XQUMAve6Ue"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6K9COKPF5Ep_63pmz9I8ICk"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":650,"yPos":130,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":-0.5,"rotateYPos":295,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":2,"bottom":593,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":591,"strokewidth":1}},"width":0,"height":591,"resume":true,"useHandCursor":true,"id":"613cWLR1kHE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Ww7hrz03UG_CorrectReview","id":"01","linkId":"6Ww7hrz03UG_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":692,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":12}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6Ww7hrz03UG_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Ww7hrz03UG_IncorrectReview","id":"01","linkId":"6Ww7hrz03UG_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":701,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":14}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6Ww7hrz03UG_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');