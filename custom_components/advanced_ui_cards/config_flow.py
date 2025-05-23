"""Config flow to configure the Lovelace UI Cards integration."""
from __future__ import annotations

import logging

from homeassistant import config_entries
from homeassistant.config_entries import ConfigFlow

from .const import NAME, DOMAIN

LOGGER = logging.getLogger(__name__)

@config_entries.HANDLERS.register(DOMAIN)
class LovelaceUICardsConfigFlow(ConfigFlow):

    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        return self.async_create_entry(
            title=NAME,
            data={'name': NAME},
        )

    async_step_import = async_step_user


