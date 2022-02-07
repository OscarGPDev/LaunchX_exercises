##!/bin/bash
python3 -m venv env
source env/bin/activate
pip freeze
pip install python-dateutil
pip freeze
deactivate
