#!/bin/bash

for f in $(ls svg); do inkscape svg/$f -z -D -A ../../../figures/spec-seq-${f%.svg}.pdf; done

