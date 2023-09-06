function getHashedUno (credential) {
  var paramsString = 'apikey=E5F3E0D30947AA5440556471321BB6D9&device=pc&partner=pooq&region=kor&drm=wm&targetage=all&credential=' + credential
  return fetch('https://apis.wavve.com/user/hash?' + paramsString,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
}

function checkParameter (param) {
  if (param === undefined || param === null) {
    throw Error('missing parameter :: [ ' + param + ' ]')
  }
}

function checkParameterList (parameterList) {
  for (var i = 0; parameterList.length > i; i++) {
    checkParameter(parameterList[i])
  }
}

window.WEL = {
  _getCookie: function (key) {
  if (!key) { return null }
  return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
    encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  },
  _loadSDK: function () {
    var intervalTimer = null
    // eslint-disable-next-line no-unused-expressions
    !(function (t, e, n, s, a, c, i, o, p) {
      // eslint-disable-next-line no-unused-expressions,no-sequences
 t.AppsFlyerSdkObject = a, t.AF = t.AF || function () {
      (t.AF.q = t.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments)))
},
      t.AF.id = t.AF.id || i, t.AF.plugins = {}, o = e.createElement(n), p = e.getElementsByTagName(n)[0], o.async = 1,
      o.src = 'https://websdk.appsflyer.com?' + (c.length > 0 ? 'st=' + c.split(',').sort().join(',') + '&' : '') + (i.length > 0 ? 'af_id=' + i : ''),
      p.parentNode.insertBefore(o, p)
}(window, document, 'script', 0, 'AF', 'pba', { pba: { webAppId: 'fc4cdb2a-8701-4a8f-8e10-25157b5d2418' } }))
    return new Promise(function (resolve, reject) {
      intervalTimer = setInterval(function () {
        if (typeof window.AF === 'function') {
          clearInterval(intervalTimer)
          resolve(window.AF)
        }
      }, 200)
    })
  },
  signup: function (loginType, hashedUno, uno) {
    // eslint-disable-next-line no-unreachable
    checkParameterList([loginType, hashedUno])
    this._loadSDK().then(function (AF) {
      AF('pba',
        'event',
        { eventName: 'af_complete_registration',
          eventType: 'EVENT',
          eventValue: {
            'af_registration_method': loginType || 'ETC',
            'af_customer_user_id': uno
          }
        })
    })
  },
  purchase: function (productType, productName, productPrice) {
    var sdkLoaded = this._loadSDK()
    var credential = JSON.parse(this._getCookie('cs')).credential
    var hashedUnoRequest = getHashedUno(credential)
    Promise.all([sdkLoaded, hashedUnoRequest]).then(function (values) {
      var AF = values[0]
      var responseUno = values[1]
      responseUno.json().then(function (responseHashedUno) {
        var hashedUno = responseHashedUno.data
          AF('pba', 'event', { eventName: 'af_purchase', eventType: 'EVENT', eventRevenueCurrency: 'KRW', eventValue: { 'af_content_type': productType, 'af_content': productName, 'af_revenue': productPrice, 'af_customer_user_id': hashedUno || '', 'currency': 'KRW' } })
      }).catch(function () {
          AF('pba', 'event', { eventName: 'af_purchase', eventType: 'EVENT', eventRevenueCurrency: 'KRW', eventValue: { 'af_content_type': productType, 'af_content': productName, 'af_revenue': productPrice, 'af_customer_user_id': '', 'currency': 'KRW' } })
      })
    })
  },
  login: async function (credential) {
    var sdkLoaded = this._loadSDK()
    var hashedUnoRequest = getHashedUno(credential)
    await Promise.all([sdkLoaded, hashedUnoRequest]).then(function (values) {
      var AF = values[0]
      var responseUno = values[1]
      responseUno.json().then(function (responseHashedUno) {
        var hashedUno = responseHashedUno.data
        AF('pba', 'setCustomerUserId', hashedUno)
      }).catch(function () {
        AF('pba', 'setCustomerUserId', '')
      })
    })
  }
}

if (typeof window.wavveLoggerWhenInit === 'function') {
  window.wavveLoggerWhenInit()
}
