#!/bin/bash

for f in $(ls svg); do inkscape svg/$f -z -D -A ../../../figures/design/seqdia/${f%.svg}.pdf; done

