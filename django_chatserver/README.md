# A simple Chat server with Django backend

This is a simple demonstration chat server implemented following the `Channels` official tutorial. 

## Installation

Need `Django`, `Channels` python libraries installed. Also need `docker` installed because this app uses a `Redis` docker image.

NOTE: At the moment of this commit, if you use conda to install `Channels`, chances are that you will encounter a problem with `daphne` version. Seems that conda installs `daphne=2.5`, which does not support ASGI3. You need to do `pip install channels` to install the correct version of `daphne`.
