#!/bin/bash

for f in $(ls sdx); do  java -jar ~/seqdiaeditor/sdedit-4.01.jar -o ./svg/${f%.sdx}.svg -t svg sdx/$f; done
