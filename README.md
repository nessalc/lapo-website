# Lake Afton Public Observatory website
Website for the Lake Afton Public Observatory

## Technology
We should update this readme with comprehensive and simple explanations to allow anyone to contribute. For now the only information is:

1. Hosted on Digital Ocean with a single droplet: 512 MB Memory / 20 GB Disk / NYC3
2. Currently the droplet is running Ubuntu on 14.04 with Ghost 0.6.4
3. The majority of the website is ideally static built with a static site generator.
4. Any dynamic portions should be Asynchronous Javascript calling back to an API of some sort (possibly built in Rails).
	- Hours and weather closings.
5. CSS framework is up for debate. Bootstrap and Foundation are both good. Let's discuss here: https://github.com/openwichita/lake-afton-website/issues/1
