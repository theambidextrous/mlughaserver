
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Weekly earning report</title>
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
        <td class="td-borderless" style="text-align:left!important;width:450px">
            {{$setup['company']}}<br>
            {{$setup['address']}}<br>
            {{$setup['city']}}, {{$setup['state']}} {{$setup['zip']}}<br>
            Phone #: {{$setup['phone']}}<br>
        </td>
        <!-- <td class="td-borderless" style="width:300px!important;"></td> -->
        <td class="td-borderless" style="text-align:right!important;width:350px">
            <span style="font-weight:700; font-size:20px">Factoring</span><br>
            <span style="font-weight:700; font-size:20px">{{ $owner['company'] }}</span><br>
            <span style="font-weight:700; font-size:20px">{{ date('m/d/Y') }}</span><br>
            <span style="font-weight:700; font-size:20px">Truck #{{ $truck }}</span><br>
        </td>
      </tr>
      </table>      
    </div>
    <hr>
  </header>
  <!-- Main Content -->
    <p class="text-1 text-left text-dark custom-p">
    {{ $owner['company'] }}<br>
    {{ $owner['address'] }} <br>
    {{ $owner['city'] }}, {{ $owner['state'] }} {{ $owner['zip'] }}
    </p>
    <!-- Passenger Details -->
    <!-- TRIPS ================== -->
    <h4 class="text-4 mt-2"><b>Trips:</b></h4>
   <table class="table" id="customers" width="800px">
      <thead class="dark-head">
        <tr>
          <th>Trip. NO.</th>
          <th>Description</th>
          <!-- <th>Mileage</th> -->
          <th>Date</th>
          <th>Freight Amt</th>
          <th>Net Amount</th>
        </tr>
      </thead>
      <tbody>
        @if(count($trips))
          @foreach( $trips as $trp )
              <tr>
                  <td>{{ $trp['number'] }}</td>
                  <td>{{ $trp['origin'] }}, {{ $trp['destination'] }}</td>
                  <!-- <td>{{ $trp['mileage'] }}</td> -->
                  <td>{{ date('m/d/Y', strtotime($trp['created_at'])) }}</td>
                  <td>${{ $trp['rate'] }}</td>
                  <td>${{ $trp['net'] }}</td>
              </tr>
          @endforeach
        @endif
        <tr>
          <td colspan="3" class="td-borderless"></td>
          <td><b>Total</b></td>
          <td><b class="color-dt">${{ $summations['a'] }}</b></td>
        </tr>
      </tbody>
    </table>
    <br>
  <!-- Footer -->
  <footer class="text-center">
    <br>
    <hr>
    <p class="text-center"><b>{{ $setup['company'] }}</b> | <b>{{$setup['address']}}</b> | <b>{{$setup['city']}}, {{$setup['state']}} {{$setup['zip']}}</b> <span>{{ Config::get('app.name')}} | {{ Config::get('app.url')}}</span> </p>
  </footer>
<!-- </div> -->
<!-- Back to My Account Link -->
</body>
</html>