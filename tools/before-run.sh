#!/bin/bash
sudo systemctl stop bluetooth
sudo rfkill unblock all
sudo hciconfig hci0 up