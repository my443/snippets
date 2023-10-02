import logging

FORMAT = "%(levelname)-8s %(asctime)s %(message)s"
dateformat = '%Y-%m-%d %H:%M:%S'


logging.basicConfig(filename='example.log', encoding='utf-8', level=logging.DEBUG, format=FORMAT, datefmt=dateformat)

for i in range(10):
    logging.debug('This message should go to the log file')
    logging.info('This message should go to the log file')
    logging.warning('This message should go to the log file')
    logging.error('This message should go to the log file')

try:
    x = 1 / 0
except:
    logging.exception("That didn't go well.")


## Learning came from:
## https://stackoverflow.com/questions/7771912/how-to-right-align-level-field-in-python-logging-formatter
## https://stackoverflow.com/questions/3220284/how-to-customize-the-time-format-for-python-logging
