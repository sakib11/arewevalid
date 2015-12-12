# areweValid

##The most tiny and easy to use jquery form validation plugin!!!

###How to use

####Install::

areweValid depends on jQuery. Include them both in end of your HTML code:
```html
<script src="jquery.js" type="text/javascript"></script>
<script src="arewevalid.min.js" type="text/javascript"></script>
```
And add css file in your `<head>`

```html
<link rel="stylesheet" type="text/css" href="arewevalid.css"/>
```

Package Managers
```
//Bower
bower install --save arewevalid

```

####Initializing

There are many data attributes in arewevalid for different levels of customization.But you must add two of them to make a input element work with arewevalid.Consider the following code snippet:

```html
<form method="get">
   <input type="text" data-enabled="yes" data-type="text">
</form>
```
Or to make an element required

```html
<form method="get">
   <input type="text" data-enabled="yes" data-type="text" data-required="true">
</form>
```

Here `data-enabled="yes"` and `data-type="text"` are manadatory.There are four values for `data-type=""` attribute.See below for further information.

Then in your js file add the following code snippet:

```js
$(document).ready(function(){
  $('form').areweValid();
});
```

You can override default by passing options to plugin method.

Available options:

<table>
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>max</td>
		<td>int</td>
		<td>15</td>
		<td>maximum character limit.works with data-type="text" and data-type="number"</td>
	</tr>
	<tr>
		<td>min</td>
		<td>int</td>
		<td>7</td>
		<td>minimum character limit.works with data-type="text" and data-type="number"</td>
	</tr>
	<tr>
		<td>disableButton</td>
		<td>boolean</td>
		<td>true</td>
		<td>If an error is exists then it will make the submit button disabled.</td>
	</tr>
	<tr>
		<td>rqMsg</td>
		<td>string</td>
		<td>It's required</td>
		<td>error message for a required element</td>
	</tr>
	<tr>
		<td>maxMsg</td>
		<td>string</td>
		<td>It's too long</td>
		<td>error message for crossing maximum character limit </td>
	</tr>
	<tr>
		<td>minMsg</td>
		<td>string</td>
		<td>It's too short</td>
		<td>error message for a input that has a value shorter than it's minimum character limit </td>
	</tr>
	<tr>
		<td>emailMsg</td>
		<td>string</td>
		<td>Please type a valid email</td>
		<td>error message for a input that value is not a valid email</td>
	</tr>
	<tr>
		<td>numMsg</td>
		<td>string</td>
		<td>Please type a valid number</td>
		<td>error message for a input that has a value rather than number.</td>
	</tr>
	<tr>
		<td>urlMsg</td>
		<td>string</td>
		<td>Please type a valid web url</td>
		<td>error message for a input that value is not a valid web url</td>
	</tr>
</table>

Example:
```html
<form method="get">
   <input type="text" data-enabled="yes" data-type="text" data-required="true">
   <input type="text" data-enabled="yes" data-type="number" >
</form>
```
```js
$(document).ready(function(){
  $('form').areweValid({
  	disableButton:false,
  	max:10,
  	numMsg:"It's not a number!"
  });
});
```


If you want to customize options at the input level then you can add data attribute to that specefic input element.But not all the data attribute works with every data-type="" attribute.For better understanding purposes see the table below.

[ Note : data-type=""  attribute is mandatory with a correct value ie: text,email,number,url ]

<table>
	<tr>
		<th>Data type </th>
		<th>Works with</th>
	</tr>
	<tr>
		<td>data-type="text"</td>
		<td>
			data-max="",data-min="",data-maxmsg="",data-minmsg="",data-required="",data-rqmsg=""
		</td>
	</tr>
	<tr>
		<td>data-type="number"</td>
		<td>
			data-nummsg="",data-max="",data-min="",data-maxmsg="",data-minmsg="",data-required="",data-rqmsg=""
		</td>
	</tr>
	<tr>
		<td>data-type="email"</td>
		<td>
			data-emailmsg="",data-required="",data-rqmsg=""
		</td>
	</tr>
	<tr>
		<td>data-type="url"</td>
		<td>
			data-urlmsg="",data-required="",data-rqmsg=""
		</td>
	</tr>
</table>

=====

#### What can do a specefic data attribute?

<table>
	<tr>
		<th>Data attribute </th>
		<th>Description</th>
	</tr>
	<tr>
		<td>data-enabled="yes"</td>
		<td>
			Must have attribute for every input element
		</td>
	</tr>
	<tr>
		<td>data-type=""</td>
		<td>
			It has four values.[text,number,url,email]
		</td>
	</tr>
	<tr>
		<td>data-required="true"</td>
		<td>
			makes an element required 
		</td>
	</tr>
	<tr>
		<td>data-max=""</td>
		<td>
			maximum character limit
		</td>
	</tr>
	<tr>
		<td>data-min=""</td>
		<td>
			minimum character limit
		</td>
	</tr>
	<tr>
		<td>data-maxmsg=""</td>
		<td>
			error message for crossing maximum character limit
		</td>
	</tr>
	<tr>
		<td>data-minmsg=""</td>
		<td>
			error message for a input that has a value shorter than it's minimum character limit
		</td>
	</tr>
	<tr>
		<td>data-nummsg=""</td>
		<td>
			error message for a input that has a value rather than number.
		</td>
	</tr>
	<tr>
		<td>data-emailmsg=""</td>
		<td>
			error message for a input that value is not a valid email
		</td>
	</tr>
	<tr>
		<td>data-urlmsg=""</td>
		<td>
			error message for a input that value is not a valid web url
		</td>
	</tr>
	<tr>
		<td>data-rqmsg=""</td>
		<td>
			error message for a input that is required.
		</td>
	</tr>

</table>

Example:
```html
<form method="get">
   <input type="text" data-enable="yes" data-type="text" data-max="16" data-required="true">
   <input type="email" data-enable="yes" data-type="email" data-emailmsg="Invalid email address"/>
   <input type="text" data-enable="yes" data-type="email"/>
   <input type="url" data-enable="yes" data-type="url" data-required="true"/>
   <input type="text" data-enable="yes" data-type="url" data-required="true"/>
   <input type="text" data-enable="yes" data-type="number" data-min="3" data-minmsg="Please enter at least 3 characters"/>
   <input type="submit" />
</form>
```
```js
$(document).ready(function(){
  $('form').areweValid({
  	max:12,
  	min:5,
  	rqMsg:"Please fill out this field",
  	emailMsg:"This email address is not valid"
  	
  });
});
```
[Live Demo](http://codepen.io/sakib11/pen/yYGpYJ)
