
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Repayment Statement</title>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size:12px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 5px;
  text-align:center!important;
}
.td-borderless{
  border: 0px solid #ddd!important;
  margin: 0px!important;
}

.td-foot{
  border: 0px solid #ddd!important;
  margin: 0px!important;
  text-align:center!important;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: left;
  background-color: #036a6b;
  color: white;
}
</style>
</head>
<body>
<!-- Container -->
<!-- <div class="container-fluid invoice-container">  -->
  <!-- Header -->
  <header>
    <div class="row align-items-center">
    <table class="table" id="customers" width="800px">
      <tr class="td-borderless" style="background-color: #ffffff !important;">
        <td class="td-borderless" style="text-align:left!important;width:450px;font-weight:500; font-size:20px;">
            <b>{{$setup['company']}}</b><br>
            {{$setup['address']}}<br>
            {{$setup['city']}}, 
             {{$setup['zip']}}<br>
            Email #: {{$setup['email']}}<br>
            Phone #: {{$setup['phone']}}<br>
        </td>
        <!-- <td class="td-borderless" style="width:300px!important;"></td> -->
        <td class="td-borderless" style="text-align:right!important;width:350px">
            <span style="font-weight:500; font-size:20px"><b>Loan statement</b></span><br>
            <span style="font-weight:500; font-size:20px">{{ $owner['fname'] . ' ' . $owner['lname'] }}</span><br>
            <span style="font-weight:500; font-size:20px">{{ date('m/d/Y') }}</span><br>
            <span style="font-weight:500; font-size:20px">{{ $owner['phone'] }}</span><br>
            <span style="font-weight:500; font-size:20px">{{ $owner['email'] }}</span><br>
            <span style="font-weight:500; font-size:20px">Member No. #{{ $owner['id'] }}</span><br>
        </td>
      </tr>
      </table>      
    </div>
    <hr>
  </header>
    <!-- loan meta -->
    <h4 class="text-4 mt-2"><b>LOAN INFORMATION</b></h4>
    <table class="table" id="customers" width="800px">
      <thead class="dark-head">
        <tr>
          <th>Amount</th>
          <th>Loanee/Member</th>
          <th>Interest rate</th>
          <th>Guarantors</th>
          <th>Approved by</th>
          <th>Repayment from</th>
          <th>Repayment to</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>{{ $info['amount'] }}</td>
            <td>{{ $info['mlabel'] }}</td>
            <td>{{ $info['interest'] }}</td>
            <td>{{ $info['glabel'] }}</td>
            <td>{{ $info['blabel'] }}</td>
            <td>{{ $info['rfrom'] }}</td>
            <td>{{ $info['rto'] }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <!-- repayments ================== -->
    <h4 class="text-4 mt-2"><b>LOAN REPAYMENT STATEMENT</b></h4>
   <table class="table" id="customers" width="800px">
      <thead class="dark-head">
        <tr>
          <th>Posting Date</th>
          <th>Repayment</th>
          <th>Interest</th>
          <th>Balance</th>
          <th>Acknowledged by</th>
        </tr>
      </thead>
      <tbody>
        @if(count($rdata))
          @foreach( $rdata as $trp )
              <tr>
                  <td>{{ $trp['pay_date'] }}</td>
                  <td>{{ $trp['paid'] }}</td>
                  <td>{{ $trp['interest'] }}</td>
                  <td>{{ $trp['rbal'] }}</td>
                  <td>{{ $trp['approver'] }}</td>
              </tr>
          @endforeach
        @endif
        <tr>
          <td><b></b></td>
          <td><b>KES.{{ $summations['a'] }}</b></td>
          <td><b>KES.{{ $summations['b'] }}</b></td>
          <td><b>KES.{{ $summations['c'] }}</b></td>
          <td><b></b></td>
        </tr>
      </tbody>
    </table>
    <!-- Fare Details -->
  <!-- Footer -->
  <hr>
  <table align="center">
    <tr>
      <td class="td-foot"><td>
      <td class="td-foot">
        <small>{{ $setup['company'] }} | {{$setup['address']}} | {{$setup['city']}}, {{$setup['state']}} {{$setup['zip']}}</small>
      <td>
      <td class="td-foot"><td>
    </tr>
    <tr>
      <td class="td-foot"><td>
      <td class="td-foot">
        <small>{{ Config::get('app.name')}} | {{ Config::get('app.url')}}</small>
      <td>
      <td class="td-foot"><td>
    </tr>
  </table>

  </p>
<!-- </div> -->
<!-- Back to My Account Link -->
</body>
</html>