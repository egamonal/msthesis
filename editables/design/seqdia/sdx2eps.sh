#!/bin/bash

for f in $(ls sdx); do  java -jar /opt/sdedit/sdedit-4.01.jar -o ./eps/${f%.sdx}.eps -t eps sdx/$f; done

