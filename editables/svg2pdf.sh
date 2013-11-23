#!/bin/bash

for f in $(ls); do inkscape $f -z -D -A ../figures/${f%.svg}.pdf; done

