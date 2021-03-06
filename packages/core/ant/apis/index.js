import { use } from '../../weapp/apis/use';
import { mixin } from '../../weapp/apis/mixin';
import { set, del, observe } from '../../weapp/observer/index';
import { renderNextTick } from '../../weapp/util/next-tick';
import { app, page, component } from '../native/index';

export function initGlobalAPI(wepy) {
  wepy.use = use;
  wepy.mixin = mixin;

  wepy.set = function(target, key, val) {
    set.apply(wepy, [undefined, target, key, val]);
  };

  wepy.delete = del;

  wepy.observe = observe;

  wepy.nextTick = renderNextTick;

  wepy.app = app;
  wepy.page = page;
  wepy.component = component;

  return wepy;
}
