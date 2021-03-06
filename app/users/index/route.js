import { inject as service } from '@ember/service';
import AbstractIndexRoute from 'hospitalrun/routes/abstract-index-route';
import UserSession from 'hospitalrun/mixins/user-session';
import { translationMacro as t } from 'ember-i18n';
import { computed } from '@ember/object';

export default AbstractIndexRoute.extend(UserSession, {
  config: service(),
  newButtonAction: computed(function() {
    if (this.currentUserCan('add_user')) {
      return 'newItem';
    } else {
      return null;
    }
  }),
  newButtonText: t('user.plusNewUser'),
  pageTitle: t('user.usersPageTile'),
  model() {
    return this.store.findAll('user');
  }
});
