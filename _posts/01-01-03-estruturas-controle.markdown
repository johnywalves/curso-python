---
layout: post
modulo: 1. Introdução ao Python
title: Estruturas de Controle (condicionais e loops)
description: Aliquyam sit clita rebum liber tempor justo kasd magna amet rebum dolore dolore dolore luptatum. Et illum duo sea duo facer invidunt diam. No erat duo feugait et lorem justo in
order: 1.3
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight python %}
import numpy as np

def neural_network(layer_input, weight_input, weight_hidden, thresholds):
    layer_hidden = np.dot(layer_input, weight_input)
    layer_output = np.dot(layer_hidden, weight_hidden)

    enumerated = enumerate(layer_output)
    classifier = lambda idx, item: 0 if item <= thresholds[idx] else 1

    return [classifier(i, e) for i, e in enumerated]
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
