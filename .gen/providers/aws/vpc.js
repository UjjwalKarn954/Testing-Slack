"use strict";
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VPC = void 0;
var cdktf = require("cdktf");
/**
* AWS VPC
*/
var VPC;
(function (VPC) {
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway}
    */
    var CustomerGateway = /** @class */ (function (_super) {
        __extends(CustomerGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options CustomerGatewayConfig
        */
        function CustomerGateway(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_customer_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._bgpAsn = config.bgpAsn;
            _this._deviceName = config.deviceName;
            _this._ipAddress = config.ipAddress;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._type = config.type;
            return _this;
        }
        Object.defineProperty(CustomerGateway.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "bgpAsn", {
            get: function () {
                return this.getStringAttribute('bgp_asn');
            },
            set: function (value) {
                this._bgpAsn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "bgpAsnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._bgpAsn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "deviceName", {
            get: function () {
                return this.getStringAttribute('device_name');
            },
            set: function (value) {
                this._deviceName = value;
            },
            enumerable: false,
            configurable: true
        });
        CustomerGateway.prototype.resetDeviceName = function () {
            this._deviceName = undefined;
        };
        Object.defineProperty(CustomerGateway.prototype, "deviceNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._deviceName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "ipAddress", {
            get: function () {
                return this.getStringAttribute('ip_address');
            },
            set: function (value) {
                this._ipAddress = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "ipAddressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipAddress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        CustomerGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(CustomerGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        CustomerGateway.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(CustomerGateway.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerGateway.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        CustomerGateway.prototype.synthesizeAttributes = function () {
            return {
                bgp_asn: cdktf.stringToTerraform(this._bgpAsn),
                device_name: cdktf.stringToTerraform(this._deviceName),
                ip_address: cdktf.stringToTerraform(this._ipAddress),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                type: cdktf.stringToTerraform(this._type)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        CustomerGateway.tfResourceType = "aws_customer_gateway";
        return CustomerGateway;
    }(cdktf.TerraformResource));
    VPC.CustomerGateway = CustomerGateway;
    function defaultNetworkAclEgressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            action: cdktf.stringToTerraform(struct.action),
            cidr_block: cdktf.stringToTerraform(struct.cidrBlock),
            from_port: cdktf.numberToTerraform(struct.fromPort),
            icmp_code: cdktf.numberToTerraform(struct.icmpCode),
            icmp_type: cdktf.numberToTerraform(struct.icmpType),
            ipv6_cidr_block: cdktf.stringToTerraform(struct.ipv6CidrBlock),
            protocol: cdktf.stringToTerraform(struct.protocol),
            rule_no: cdktf.numberToTerraform(struct.ruleNo),
            to_port: cdktf.numberToTerraform(struct.toPort)
        };
    }
    function defaultNetworkAclIngressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            action: cdktf.stringToTerraform(struct.action),
            cidr_block: cdktf.stringToTerraform(struct.cidrBlock),
            from_port: cdktf.numberToTerraform(struct.fromPort),
            icmp_code: cdktf.numberToTerraform(struct.icmpCode),
            icmp_type: cdktf.numberToTerraform(struct.icmpType),
            ipv6_cidr_block: cdktf.stringToTerraform(struct.ipv6CidrBlock),
            protocol: cdktf.stringToTerraform(struct.protocol),
            rule_no: cdktf.numberToTerraform(struct.ruleNo),
            to_port: cdktf.numberToTerraform(struct.toPort)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl}
    */
    var DefaultNetworkAcl = /** @class */ (function (_super) {
        __extends(DefaultNetworkAcl, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultNetworkAclConfig
        */
        function DefaultNetworkAcl(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_network_acl',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._defaultNetworkAclId = config.defaultNetworkAclId;
            _this._subnetIds = config.subnetIds;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._egress = config.egress;
            _this._ingress = config.ingress;
            return _this;
        }
        Object.defineProperty(DefaultNetworkAcl.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "defaultNetworkAclId", {
            get: function () {
                return this.getStringAttribute('default_network_acl_id');
            },
            set: function (value) {
                this._defaultNetworkAclId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "defaultNetworkAclIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._defaultNetworkAclId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "subnetIds", {
            get: function () {
                return this.getListAttribute('subnet_ids');
            },
            set: function (value) {
                this._subnetIds = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultNetworkAcl.prototype.resetSubnetIds = function () {
            this._subnetIds = undefined;
        };
        Object.defineProperty(DefaultNetworkAcl.prototype, "subnetIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultNetworkAcl.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultNetworkAcl.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultNetworkAcl.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultNetworkAcl.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "egress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('egress');
            },
            set: function (value) {
                this._egress = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultNetworkAcl.prototype.resetEgress = function () {
            this._egress = undefined;
        };
        Object.defineProperty(DefaultNetworkAcl.prototype, "egressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultNetworkAcl.prototype, "ingress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('ingress');
            },
            set: function (value) {
                this._ingress = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultNetworkAcl.prototype.resetIngress = function () {
            this._ingress = undefined;
        };
        Object.defineProperty(DefaultNetworkAcl.prototype, "ingressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ingress;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultNetworkAcl.prototype.synthesizeAttributes = function () {
            return {
                default_network_acl_id: cdktf.stringToTerraform(this._defaultNetworkAclId),
                subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                egress: cdktf.listMapper(defaultNetworkAclEgressToTerraform)(this._egress),
                ingress: cdktf.listMapper(defaultNetworkAclIngressToTerraform)(this._ingress)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultNetworkAcl.tfResourceType = "aws_default_network_acl";
        return DefaultNetworkAcl;
    }(cdktf.TerraformResource));
    VPC.DefaultNetworkAcl = DefaultNetworkAcl;
    function defaultRouteTableRouteToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
            destination_prefix_list_id: struct.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct.destinationPrefixListId),
            egress_only_gateway_id: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct.egressOnlyGatewayId),
            gateway_id: struct.gatewayId === undefined ? null : cdktf.stringToTerraform(struct.gatewayId),
            instance_id: struct.instanceId === undefined ? null : cdktf.stringToTerraform(struct.instanceId),
            ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
            nat_gateway_id: struct.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct.natGatewayId),
            network_interface_id: struct.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct.networkInterfaceId),
            transit_gateway_id: struct.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct.transitGatewayId),
            vpc_endpoint_id: struct.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct.vpcEndpointId),
            vpc_peering_connection_id: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct.vpcPeeringConnectionId)
        };
    }
    function defaultRouteTableTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var DefaultRouteTableTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(DefaultRouteTableTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function DefaultRouteTableTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(DefaultRouteTableTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTableTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(DefaultRouteTableTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTableTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTableTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(DefaultRouteTableTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return DefaultRouteTableTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.DefaultRouteTableTimeoutsOutputReference = DefaultRouteTableTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table}
    */
    var DefaultRouteTable = /** @class */ (function (_super) {
        __extends(DefaultRouteTable, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultRouteTableConfig
        */
        function DefaultRouteTable(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_route_table',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new DefaultRouteTableTimeoutsOutputReference(_this, "timeouts", true);
            _this._defaultRouteTableId = config.defaultRouteTableId;
            _this._propagatingVgws = config.propagatingVgws;
            _this._route = config.route;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(DefaultRouteTable.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "defaultRouteTableId", {
            get: function () {
                return this.getStringAttribute('default_route_table_id');
            },
            set: function (value) {
                this._defaultRouteTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "defaultRouteTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._defaultRouteTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "propagatingVgws", {
            get: function () {
                return this.getListAttribute('propagating_vgws');
            },
            set: function (value) {
                this._propagatingVgws = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTable.prototype.resetPropagatingVgws = function () {
            this._propagatingVgws = undefined;
        };
        Object.defineProperty(DefaultRouteTable.prototype, "propagatingVgwsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._propagatingVgws;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "route", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('route');
            },
            set: function (value) {
                this._route = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTable.prototype.resetRoute = function () {
            this._route = undefined;
        };
        Object.defineProperty(DefaultRouteTable.prototype, "routeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._route;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTable.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultRouteTable.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTable.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultRouteTable.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultRouteTable.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        DefaultRouteTable.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        DefaultRouteTable.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(DefaultRouteTable.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultRouteTable.prototype.synthesizeAttributes = function () {
            return {
                default_route_table_id: cdktf.stringToTerraform(this._defaultRouteTableId),
                propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
                route: cdktf.listMapper(defaultRouteTableRouteToTerraform)(this._route),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                timeouts: defaultRouteTableTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultRouteTable.tfResourceType = "aws_default_route_table";
        return DefaultRouteTable;
    }(cdktf.TerraformResource));
    VPC.DefaultRouteTable = DefaultRouteTable;
    function defaultSecurityGroupEgressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
            description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
            prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
            self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    function defaultSecurityGroupIngressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
            description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
            prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
            self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}
    */
    var DefaultSecurityGroup = /** @class */ (function (_super) {
        __extends(DefaultSecurityGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultSecurityGroupConfig = {}
        */
        function DefaultSecurityGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_security_group',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._egress = config.egress;
            _this._ingress = config.ingress;
            _this._revokeRulesOnDelete = config.revokeRulesOnDelete;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(DefaultSecurityGroup.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "description", {
            // description - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('description');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "egress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('egress');
            },
            set: function (value) {
                this._egress = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetEgress = function () {
            this._egress = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "egressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "ingress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('ingress');
            },
            set: function (value) {
                this._ingress = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetIngress = function () {
            this._ingress = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "ingressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ingress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "name", {
            // name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "revokeRulesOnDelete", {
            get: function () {
                return this.getBooleanAttribute('revoke_rules_on_delete');
            },
            set: function (value) {
                this._revokeRulesOnDelete = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetRevokeRulesOnDelete = function () {
            this._revokeRulesOnDelete = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "revokeRulesOnDeleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._revokeRulesOnDelete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSecurityGroup.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSecurityGroup.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DefaultSecurityGroup.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultSecurityGroup.prototype.synthesizeAttributes = function () {
            return {
                egress: cdktf.listMapper(defaultSecurityGroupEgressToTerraform)(this._egress),
                ingress: cdktf.listMapper(defaultSecurityGroupIngressToTerraform)(this._ingress),
                revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultSecurityGroup.tfResourceType = "aws_default_security_group";
        return DefaultSecurityGroup;
    }(cdktf.TerraformResource));
    VPC.DefaultSecurityGroup = DefaultSecurityGroup;
    function defaultSubnetTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var DefaultSubnetTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(DefaultSubnetTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function DefaultSubnetTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(DefaultSubnetTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnetTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(DefaultSubnetTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnetTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnetTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(DefaultSubnetTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return DefaultSubnetTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.DefaultSubnetTimeoutsOutputReference = DefaultSubnetTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet}
    */
    var DefaultSubnet = /** @class */ (function (_super) {
        __extends(DefaultSubnet, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultSubnetConfig
        */
        function DefaultSubnet(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_subnet',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new DefaultSubnetTimeoutsOutputReference(_this, "timeouts", true);
            _this._availabilityZone = config.availabilityZone;
            _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
            _this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
            _this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
            _this._outpostArn = config.outpostArn;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(DefaultSubnet.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "assignIpv6AddressOnCreation", {
            // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('assign_ipv6_address_on_creation');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "availabilityZoneId", {
            // availability_zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('availability_zone_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "customerOwnedIpv4Pool", {
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            set: function (value) {
                this._customerOwnedIpv4Pool = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetCustomerOwnedIpv4Pool = function () {
            this._customerOwnedIpv4Pool = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "customerOwnedIpv4PoolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._customerOwnedIpv4Pool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "ipv6CidrBlock", {
            // ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "ipv6CidrBlockAssociationId", {
            // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "mapCustomerOwnedIpOnLaunch", {
            get: function () {
                return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
            },
            set: function (value) {
                this._mapCustomerOwnedIpOnLaunch = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetMapCustomerOwnedIpOnLaunch = function () {
            this._mapCustomerOwnedIpOnLaunch = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "mapCustomerOwnedIpOnLaunchInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._mapCustomerOwnedIpOnLaunch;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "mapPublicIpOnLaunch", {
            get: function () {
                return this.getBooleanAttribute('map_public_ip_on_launch');
            },
            set: function (value) {
                this._mapPublicIpOnLaunch = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetMapPublicIpOnLaunch = function () {
            this._mapPublicIpOnLaunch = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "mapPublicIpOnLaunchInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._mapPublicIpOnLaunch;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "outpostArn", {
            get: function () {
                return this.getStringAttribute('outpost_arn');
            },
            set: function (value) {
                this._outpostArn = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetOutpostArn = function () {
            this._outpostArn = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "outpostArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._outpostArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultSubnet.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        DefaultSubnet.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        DefaultSubnet.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(DefaultSubnet.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultSubnet.prototype.synthesizeAttributes = function () {
            return {
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
                map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
                map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
                outpost_arn: cdktf.stringToTerraform(this._outpostArn),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                timeouts: defaultSubnetTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultSubnet.tfResourceType = "aws_default_subnet";
        return DefaultSubnet;
    }(cdktf.TerraformResource));
    VPC.DefaultSubnet = DefaultSubnet;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}
    */
    var DefaultVpc = /** @class */ (function (_super) {
        __extends(DefaultVpc, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultVpcConfig = {}
        */
        function DefaultVpc(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_vpc',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._enableClassiclink = config.enableClassiclink;
            _this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
            _this._enableDnsHostnames = config.enableDnsHostnames;
            _this._enableDnsSupport = config.enableDnsSupport;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(DefaultVpc.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "assignGeneratedIpv6CidrBlock", {
            // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "defaultNetworkAclId", {
            // default_network_acl_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_network_acl_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "defaultRouteTableId", {
            // default_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "defaultSecurityGroupId", {
            // default_security_group_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_security_group_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "dhcpOptionsId", {
            // dhcp_options_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dhcp_options_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "enableClassiclink", {
            get: function () {
                return this.getBooleanAttribute('enable_classiclink');
            },
            set: function (value) {
                this._enableClassiclink = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetEnableClassiclink = function () {
            this._enableClassiclink = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableClassiclink;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkDnsSupport", {
            get: function () {
                return this.getBooleanAttribute('enable_classiclink_dns_support');
            },
            set: function (value) {
                this._enableClassiclinkDnsSupport = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetEnableClassiclinkDnsSupport = function () {
            this._enableClassiclinkDnsSupport = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkDnsSupportInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableClassiclinkDnsSupport;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "enableDnsHostnames", {
            get: function () {
                return this.getBooleanAttribute('enable_dns_hostnames');
            },
            set: function (value) {
                this._enableDnsHostnames = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetEnableDnsHostnames = function () {
            this._enableDnsHostnames = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "enableDnsHostnamesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDnsHostnames;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "enableDnsSupport", {
            get: function () {
                return this.getBooleanAttribute('enable_dns_support');
            },
            set: function (value) {
                this._enableDnsSupport = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetEnableDnsSupport = function () {
            this._enableDnsSupport = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "enableDnsSupportInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDnsSupport;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "instanceTenancy", {
            // instance_tenancy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_tenancy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "ipv6AssociationId", {
            // ipv6_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "ipv6CidrBlock", {
            // ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "mainRouteTableId", {
            // main_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('main_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpc.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpc.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultVpc.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultVpc.prototype.synthesizeAttributes = function () {
            return {
                enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
                enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
                enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
                enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultVpc.tfResourceType = "aws_default_vpc";
        return DefaultVpc;
    }(cdktf.TerraformResource));
    VPC.DefaultVpc = DefaultVpc;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options}
    */
    var DefaultVpcDhcpOptions = /** @class */ (function (_super) {
        __extends(DefaultVpcDhcpOptions, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DefaultVpcDhcpOptionsConfig = {}
        */
        function DefaultVpcDhcpOptions(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_default_vpc_dhcp_options',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._netbiosNameServers = config.netbiosNameServers;
            _this._netbiosNodeType = config.netbiosNodeType;
            _this._ownerId = config.ownerId;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "domainName", {
            // domain_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('domain_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "domainNameServers", {
            // domain_name_servers - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('domain_name_servers');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNameServers", {
            get: function () {
                return this.getListAttribute('netbios_name_servers');
            },
            set: function (value) {
                this._netbiosNameServers = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpcDhcpOptions.prototype.resetNetbiosNameServers = function () {
            this._netbiosNameServers = undefined;
        };
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNameServersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._netbiosNameServers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNodeType", {
            get: function () {
                return this.getStringAttribute('netbios_node_type');
            },
            set: function (value) {
                this._netbiosNodeType = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpcDhcpOptions.prototype.resetNetbiosNodeType = function () {
            this._netbiosNodeType = undefined;
        };
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNodeTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._netbiosNodeType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ntpServers", {
            // ntp_servers - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ntp_servers');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ownerId", {
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            set: function (value) {
                this._ownerId = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpcDhcpOptions.prototype.resetOwnerId = function () {
            this._ownerId = undefined;
        };
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ownerIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ownerId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpcDhcpOptions.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        DefaultVpcDhcpOptions.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DefaultVpcDhcpOptions.prototype.synthesizeAttributes = function () {
            return {
                netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
                netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
                owner_id: cdktf.stringToTerraform(this._ownerId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DefaultVpcDhcpOptions.tfResourceType = "aws_default_vpc_dhcp_options";
        return DefaultVpcDhcpOptions;
    }(cdktf.TerraformResource));
    VPC.DefaultVpcDhcpOptions = DefaultVpcDhcpOptions;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway}
    */
    var EgressOnlyInternetGateway = /** @class */ (function (_super) {
        __extends(EgressOnlyInternetGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options EgressOnlyInternetGatewayConfig
        */
        function EgressOnlyInternetGateway(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_egress_only_internet_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        EgressOnlyInternetGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        EgressOnlyInternetGateway.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EgressOnlyInternetGateway.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        EgressOnlyInternetGateway.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        EgressOnlyInternetGateway.tfResourceType = "aws_egress_only_internet_gateway";
        return EgressOnlyInternetGateway;
    }(cdktf.TerraformResource));
    VPC.EgressOnlyInternetGateway = EgressOnlyInternetGateway;
    function flowLogDestinationOptionsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            file_format: cdktf.stringToTerraform(struct.fileFormat),
            hive_compatible_partitions: cdktf.booleanToTerraform(struct.hiveCompatiblePartitions),
            per_hour_partition: cdktf.booleanToTerraform(struct.perHourPartition)
        };
    }
    var FlowLogDestinationOptionsOutputReference = /** @class */ (function (_super) {
        __extends(FlowLogDestinationOptionsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function FlowLogDestinationOptionsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "fileFormat", {
            get: function () {
                return this.getStringAttribute('file_format');
            },
            set: function (value) {
                this._fileFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLogDestinationOptionsOutputReference.prototype.resetFileFormat = function () {
            this._fileFormat = undefined;
        };
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "fileFormatInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._fileFormat;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "hiveCompatiblePartitions", {
            get: function () {
                return this.getBooleanAttribute('hive_compatible_partitions');
            },
            set: function (value) {
                this._hiveCompatiblePartitions = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLogDestinationOptionsOutputReference.prototype.resetHiveCompatiblePartitions = function () {
            this._hiveCompatiblePartitions = undefined;
        };
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "hiveCompatiblePartitionsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._hiveCompatiblePartitions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "perHourPartition", {
            get: function () {
                return this.getBooleanAttribute('per_hour_partition');
            },
            set: function (value) {
                this._perHourPartition = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLogDestinationOptionsOutputReference.prototype.resetPerHourPartition = function () {
            this._perHourPartition = undefined;
        };
        Object.defineProperty(FlowLogDestinationOptionsOutputReference.prototype, "perHourPartitionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._perHourPartition;
            },
            enumerable: false,
            configurable: true
        });
        return FlowLogDestinationOptionsOutputReference;
    }(cdktf.ComplexObject));
    VPC.FlowLogDestinationOptionsOutputReference = FlowLogDestinationOptionsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}
    */
    var FlowLog = /** @class */ (function (_super) {
        __extends(FlowLog, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options FlowLogConfig
        */
        function FlowLog(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_flow_log',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__destinationOptionsOutput = new FlowLogDestinationOptionsOutputReference(_this, "destination_options", true);
            _this._eniId = config.eniId;
            _this._iamRoleArn = config.iamRoleArn;
            _this._logDestination = config.logDestination;
            _this._logDestinationType = config.logDestinationType;
            _this._logFormat = config.logFormat;
            _this._logGroupName = config.logGroupName;
            _this._maxAggregationInterval = config.maxAggregationInterval;
            _this._subnetId = config.subnetId;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._trafficType = config.trafficType;
            _this._vpcId = config.vpcId;
            _this._destinationOptions = config.destinationOptions;
            return _this;
        }
        Object.defineProperty(FlowLog.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "eniId", {
            get: function () {
                return this.getStringAttribute('eni_id');
            },
            set: function (value) {
                this._eniId = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetEniId = function () {
            this._eniId = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "eniIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._eniId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "iamRoleArn", {
            get: function () {
                return this.getStringAttribute('iam_role_arn');
            },
            set: function (value) {
                this._iamRoleArn = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetIamRoleArn = function () {
            this._iamRoleArn = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "iamRoleArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._iamRoleArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "logDestination", {
            get: function () {
                return this.getStringAttribute('log_destination');
            },
            set: function (value) {
                this._logDestination = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetLogDestination = function () {
            this._logDestination = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "logDestinationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._logDestination;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "logDestinationType", {
            get: function () {
                return this.getStringAttribute('log_destination_type');
            },
            set: function (value) {
                this._logDestinationType = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetLogDestinationType = function () {
            this._logDestinationType = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "logDestinationTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._logDestinationType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "logFormat", {
            get: function () {
                return this.getStringAttribute('log_format');
            },
            set: function (value) {
                this._logFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetLogFormat = function () {
            this._logFormat = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "logFormatInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._logFormat;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "logGroupName", {
            get: function () {
                return this.getStringAttribute('log_group_name');
            },
            set: function (value) {
                this._logGroupName = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetLogGroupName = function () {
            this._logGroupName = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "logGroupNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._logGroupName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "maxAggregationInterval", {
            get: function () {
                return this.getNumberAttribute('max_aggregation_interval');
            },
            set: function (value) {
                this._maxAggregationInterval = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetMaxAggregationInterval = function () {
            this._maxAggregationInterval = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "maxAggregationIntervalInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._maxAggregationInterval;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetSubnetId = function () {
            this._subnetId = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "trafficType", {
            get: function () {
                return this.getStringAttribute('traffic_type');
            },
            set: function (value) {
                this._trafficType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "trafficTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._trafficType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlowLog.prototype, "destinationOptions", {
            get: function () {
                return this.__destinationOptionsOutput;
            },
            enumerable: false,
            configurable: true
        });
        FlowLog.prototype.putDestinationOptions = function (value) {
            this._destinationOptions = value;
        };
        FlowLog.prototype.resetDestinationOptions = function () {
            this._destinationOptions = undefined;
        };
        Object.defineProperty(FlowLog.prototype, "destinationOptionsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationOptions;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        FlowLog.prototype.synthesizeAttributes = function () {
            return {
                eni_id: cdktf.stringToTerraform(this._eniId),
                iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
                log_destination: cdktf.stringToTerraform(this._logDestination),
                log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
                log_format: cdktf.stringToTerraform(this._logFormat),
                log_group_name: cdktf.stringToTerraform(this._logGroupName),
                max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                traffic_type: cdktf.stringToTerraform(this._trafficType),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                destination_options: flowLogDestinationOptionsToTerraform(this._destinationOptions)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        FlowLog.tfResourceType = "aws_flow_log";
        return FlowLog;
    }(cdktf.TerraformResource));
    VPC.FlowLog = FlowLog;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html aws_internet_gateway}
    */
    var InternetGateway = /** @class */ (function (_super) {
        __extends(InternetGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html aws_internet_gateway} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options InternetGatewayConfig = {}
        */
        function InternetGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_internet_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(InternetGateway.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InternetGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InternetGateway.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InternetGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        InternetGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(InternetGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InternetGateway.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        InternetGateway.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(InternetGateway.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InternetGateway.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        InternetGateway.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(InternetGateway.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        InternetGateway.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        InternetGateway.tfResourceType = "aws_internet_gateway";
        return InternetGateway;
    }(cdktf.TerraformResource));
    VPC.InternetGateway = InternetGateway;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association}
    */
    var MainRouteTableAssociation = /** @class */ (function (_super) {
        __extends(MainRouteTableAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options MainRouteTableAssociationConfig
        */
        function MainRouteTableAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_main_route_table_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._routeTableId = config.routeTableId;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(MainRouteTableAssociation.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainRouteTableAssociation.prototype, "originalRouteTableId", {
            // original_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('original_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainRouteTableAssociation.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainRouteTableAssociation.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainRouteTableAssociation.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainRouteTableAssociation.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        MainRouteTableAssociation.prototype.synthesizeAttributes = function () {
            return {
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        MainRouteTableAssociation.tfResourceType = "aws_main_route_table_association";
        return MainRouteTableAssociation;
    }(cdktf.TerraformResource));
    VPC.MainRouteTableAssociation = MainRouteTableAssociation;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway}
    */
    var NatGateway = /** @class */ (function (_super) {
        __extends(NatGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NatGatewayConfig
        */
        function NatGateway(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_nat_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._allocationId = config.allocationId;
            _this._connectivityType = config.connectivityType;
            _this._subnetId = config.subnetId;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(NatGateway.prototype, "allocationId", {
            get: function () {
                return this.getStringAttribute('allocation_id');
            },
            set: function (value) {
                this._allocationId = value;
            },
            enumerable: false,
            configurable: true
        });
        NatGateway.prototype.resetAllocationId = function () {
            this._allocationId = undefined;
        };
        Object.defineProperty(NatGateway.prototype, "allocationIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allocationId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "connectivityType", {
            get: function () {
                return this.getStringAttribute('connectivity_type');
            },
            set: function (value) {
                this._connectivityType = value;
            },
            enumerable: false,
            configurable: true
        });
        NatGateway.prototype.resetConnectivityType = function () {
            this._connectivityType = undefined;
        };
        Object.defineProperty(NatGateway.prototype, "connectivityTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._connectivityType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "networkInterfaceId", {
            // network_interface_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "privateIp", {
            // private_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "publicIp", {
            // public_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('public_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        NatGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(NatGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NatGateway.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        NatGateway.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(NatGateway.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NatGateway.prototype.synthesizeAttributes = function () {
            return {
                allocation_id: cdktf.stringToTerraform(this._allocationId),
                connectivity_type: cdktf.stringToTerraform(this._connectivityType),
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NatGateway.tfResourceType = "aws_nat_gateway";
        return NatGateway;
    }(cdktf.TerraformResource));
    VPC.NatGateway = NatGateway;
    function networkAclEgressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            action: struct.action === undefined ? null : cdktf.stringToTerraform(struct.action),
            cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            icmp_code: struct.icmpCode === undefined ? null : cdktf.numberToTerraform(struct.icmpCode),
            icmp_type: struct.icmpType === undefined ? null : cdktf.numberToTerraform(struct.icmpType),
            ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            rule_no: struct.ruleNo === undefined ? null : cdktf.numberToTerraform(struct.ruleNo),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    function networkAclIngressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            action: struct.action === undefined ? null : cdktf.stringToTerraform(struct.action),
            cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            icmp_code: struct.icmpCode === undefined ? null : cdktf.numberToTerraform(struct.icmpCode),
            icmp_type: struct.icmpType === undefined ? null : cdktf.numberToTerraform(struct.icmpType),
            ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            rule_no: struct.ruleNo === undefined ? null : cdktf.numberToTerraform(struct.ruleNo),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl}
    */
    var NetworkAcl = /** @class */ (function (_super) {
        __extends(NetworkAcl, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NetworkAclConfig
        */
        function NetworkAcl(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_acl',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._egress = config.egress;
            _this._ingress = config.ingress;
            _this._subnetIds = config.subnetIds;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(NetworkAcl.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "egress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('egress');
            },
            set: function (value) {
                this._egress = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAcl.prototype.resetEgress = function () {
            this._egress = undefined;
        };
        Object.defineProperty(NetworkAcl.prototype, "egressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "ingress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('ingress');
            },
            set: function (value) {
                this._ingress = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAcl.prototype.resetIngress = function () {
            this._ingress = undefined;
        };
        Object.defineProperty(NetworkAcl.prototype, "ingressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ingress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "subnetIds", {
            get: function () {
                return this.getListAttribute('subnet_ids');
            },
            set: function (value) {
                this._subnetIds = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAcl.prototype.resetSubnetIds = function () {
            this._subnetIds = undefined;
        };
        Object.defineProperty(NetworkAcl.prototype, "subnetIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAcl.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(NetworkAcl.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAcl.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(NetworkAcl.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAcl.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NetworkAcl.prototype.synthesizeAttributes = function () {
            return {
                egress: cdktf.listMapper(networkAclEgressToTerraform)(this._egress),
                ingress: cdktf.listMapper(networkAclIngressToTerraform)(this._ingress),
                subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NetworkAcl.tfResourceType = "aws_network_acl";
        return NetworkAcl;
    }(cdktf.TerraformResource));
    VPC.NetworkAcl = NetworkAcl;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}
    */
    var NetworkAclRule = /** @class */ (function (_super) {
        __extends(NetworkAclRule, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NetworkAclRuleConfig
        */
        function NetworkAclRule(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_acl_rule',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cidrBlock = config.cidrBlock;
            _this._egress = config.egress;
            _this._fromPort = config.fromPort;
            _this._icmpCode = config.icmpCode;
            _this._icmpType = config.icmpType;
            _this._ipv6CidrBlock = config.ipv6CidrBlock;
            _this._networkAclId = config.networkAclId;
            _this._protocol = config.protocol;
            _this._ruleAction = config.ruleAction;
            _this._ruleNumber = config.ruleNumber;
            _this._toPort = config.toPort;
            return _this;
        }
        Object.defineProperty(NetworkAclRule.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetCidrBlock = function () {
            this._cidrBlock = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "egress", {
            get: function () {
                return this.getBooleanAttribute('egress');
            },
            set: function (value) {
                this._egress = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetEgress = function () {
            this._egress = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "egressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "fromPort", {
            get: function () {
                return this.getNumberAttribute('from_port');
            },
            set: function (value) {
                this._fromPort = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetFromPort = function () {
            this._fromPort = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "fromPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._fromPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "icmpCode", {
            get: function () {
                return this.getStringAttribute('icmp_code');
            },
            set: function (value) {
                this._icmpCode = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetIcmpCode = function () {
            this._icmpCode = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "icmpCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._icmpCode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "icmpType", {
            get: function () {
                return this.getStringAttribute('icmp_type');
            },
            set: function (value) {
                this._icmpType = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetIcmpType = function () {
            this._icmpType = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "icmpTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._icmpType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "ipv6CidrBlock", {
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            set: function (value) {
                this._ipv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetIpv6CidrBlock = function () {
            this._ipv6CidrBlock = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "ipv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "networkAclId", {
            get: function () {
                return this.getStringAttribute('network_acl_id');
            },
            set: function (value) {
                this._networkAclId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "networkAclIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkAclId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "ruleAction", {
            get: function () {
                return this.getStringAttribute('rule_action');
            },
            set: function (value) {
                this._ruleAction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "ruleActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ruleAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "ruleNumber", {
            get: function () {
                return this.getNumberAttribute('rule_number');
            },
            set: function (value) {
                this._ruleNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "ruleNumberInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ruleNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkAclRule.prototype, "toPort", {
            get: function () {
                return this.getNumberAttribute('to_port');
            },
            set: function (value) {
                this._toPort = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkAclRule.prototype.resetToPort = function () {
            this._toPort = undefined;
        };
        Object.defineProperty(NetworkAclRule.prototype, "toPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._toPort;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NetworkAclRule.prototype.synthesizeAttributes = function () {
            return {
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                egress: cdktf.booleanToTerraform(this._egress),
                from_port: cdktf.numberToTerraform(this._fromPort),
                icmp_code: cdktf.stringToTerraform(this._icmpCode),
                icmp_type: cdktf.stringToTerraform(this._icmpType),
                ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
                network_acl_id: cdktf.stringToTerraform(this._networkAclId),
                protocol: cdktf.stringToTerraform(this._protocol),
                rule_action: cdktf.stringToTerraform(this._ruleAction),
                rule_number: cdktf.numberToTerraform(this._ruleNumber),
                to_port: cdktf.numberToTerraform(this._toPort)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NetworkAclRule.tfResourceType = "aws_network_acl_rule";
        return NetworkAclRule;
    }(cdktf.TerraformResource));
    VPC.NetworkAclRule = NetworkAclRule;
    function networkInterfaceAttachmentToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            device_index: cdktf.numberToTerraform(struct.deviceIndex),
            instance: cdktf.stringToTerraform(struct.instance)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}
    */
    var NetworkInterface = /** @class */ (function (_super) {
        __extends(NetworkInterface, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NetworkInterfaceConfig
        */
        function NetworkInterface(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_interface',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._description = config.description;
            _this._interfaceType = config.interfaceType;
            _this._ipv4PrefixCount = config.ipv4PrefixCount;
            _this._ipv4Prefixes = config.ipv4Prefixes;
            _this._ipv6AddressCount = config.ipv6AddressCount;
            _this._ipv6Addresses = config.ipv6Addresses;
            _this._ipv6PrefixCount = config.ipv6PrefixCount;
            _this._ipv6Prefixes = config.ipv6Prefixes;
            _this._privateIp = config.privateIp;
            _this._privateIps = config.privateIps;
            _this._privateIpsCount = config.privateIpsCount;
            _this._securityGroups = config.securityGroups;
            _this._sourceDestCheck = config.sourceDestCheck;
            _this._subnetId = config.subnetId;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._attachment = config.attachment;
            return _this;
        }
        Object.defineProperty(NetworkInterface.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "description", {
            get: function () {
                return this.getStringAttribute('description');
            },
            set: function (value) {
                this._description = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetDescription = function () {
            this._description = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "descriptionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._description;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "interfaceType", {
            get: function () {
                return this.getStringAttribute('interface_type');
            },
            set: function (value) {
                this._interfaceType = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetInterfaceType = function () {
            this._interfaceType = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "interfaceTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._interfaceType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixCount", {
            get: function () {
                return this.getNumberAttribute('ipv4_prefix_count');
            },
            set: function (value) {
                this._ipv4PrefixCount = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv4PrefixCount = function () {
            this._ipv4PrefixCount = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixCountInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv4PrefixCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv4Prefixes", {
            get: function () {
                return this.getListAttribute('ipv4_prefixes');
            },
            set: function (value) {
                this._ipv4Prefixes = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv4Prefixes = function () {
            this._ipv4Prefixes = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv4Prefixes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv6AddressCount", {
            get: function () {
                return this.getNumberAttribute('ipv6_address_count');
            },
            set: function (value) {
                this._ipv6AddressCount = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv6AddressCount = function () {
            this._ipv6AddressCount = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv6AddressCountInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6AddressCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv6Addresses", {
            get: function () {
                return this.getListAttribute('ipv6_addresses');
            },
            set: function (value) {
                this._ipv6Addresses = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv6Addresses = function () {
            this._ipv6Addresses = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv6AddressesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6Addresses;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixCount", {
            get: function () {
                return this.getNumberAttribute('ipv6_prefix_count');
            },
            set: function (value) {
                this._ipv6PrefixCount = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv6PrefixCount = function () {
            this._ipv6PrefixCount = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixCountInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6PrefixCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ipv6Prefixes", {
            get: function () {
                return this.getListAttribute('ipv6_prefixes');
            },
            set: function (value) {
                this._ipv6Prefixes = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetIpv6Prefixes = function () {
            this._ipv6Prefixes = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6Prefixes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "macAddress", {
            // mac_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('mac_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "outpostArn", {
            // outpost_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outpost_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "privateDnsName", {
            // private_dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "privateIp", {
            get: function () {
                return this.getStringAttribute('private_ip');
            },
            set: function (value) {
                this._privateIp = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetPrivateIp = function () {
            this._privateIp = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "privateIpInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._privateIp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "privateIps", {
            get: function () {
                return this.getListAttribute('private_ips');
            },
            set: function (value) {
                this._privateIps = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetPrivateIps = function () {
            this._privateIps = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "privateIpsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._privateIps;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "privateIpsCount", {
            get: function () {
                return this.getNumberAttribute('private_ips_count');
            },
            set: function (value) {
                this._privateIpsCount = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetPrivateIpsCount = function () {
            this._privateIpsCount = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "privateIpsCountInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._privateIpsCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "securityGroups", {
            get: function () {
                return this.getListAttribute('security_groups');
            },
            set: function (value) {
                this._securityGroups = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetSecurityGroups = function () {
            this._securityGroups = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "securityGroupsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroups;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "sourceDestCheck", {
            get: function () {
                return this.getBooleanAttribute('source_dest_check');
            },
            set: function (value) {
                this._sourceDestCheck = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetSourceDestCheck = function () {
            this._sourceDestCheck = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "sourceDestCheckInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sourceDestCheck;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterface.prototype, "attachment", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('attachment');
            },
            set: function (value) {
                this._attachment = value;
            },
            enumerable: false,
            configurable: true
        });
        NetworkInterface.prototype.resetAttachment = function () {
            this._attachment = undefined;
        };
        Object.defineProperty(NetworkInterface.prototype, "attachmentInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._attachment;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NetworkInterface.prototype.synthesizeAttributes = function () {
            return {
                description: cdktf.stringToTerraform(this._description),
                interface_type: cdktf.stringToTerraform(this._interfaceType),
                ipv4_prefix_count: cdktf.numberToTerraform(this._ipv4PrefixCount),
                ipv4_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv4Prefixes),
                ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
                ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
                ipv6_prefix_count: cdktf.numberToTerraform(this._ipv6PrefixCount),
                ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Prefixes),
                private_ip: cdktf.stringToTerraform(this._privateIp),
                private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
                private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
                security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
                source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform)(this._attachment)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NetworkInterface.tfResourceType = "aws_network_interface";
        return NetworkInterface;
    }(cdktf.TerraformResource));
    VPC.NetworkInterface = NetworkInterface;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment}
    */
    var NetworkInterfaceAttachmentA = /** @class */ (function (_super) {
        __extends(NetworkInterfaceAttachmentA, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NetworkInterfaceAttachmentAConfig
        */
        function NetworkInterfaceAttachmentA(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_interface_attachment',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._deviceIndex = config.deviceIndex;
            _this._instanceId = config.instanceId;
            _this._networkInterfaceId = config.networkInterfaceId;
            return _this;
        }
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "attachmentId", {
            // ==========
            // ATTRIBUTES
            // ==========
            // attachment_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('attachment_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "deviceIndex", {
            get: function () {
                return this.getNumberAttribute('device_index');
            },
            set: function (value) {
                this._deviceIndex = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "deviceIndexInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._deviceIndex;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "instanceId", {
            get: function () {
                return this.getStringAttribute('instance_id');
            },
            set: function (value) {
                this._instanceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "instanceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instanceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "networkInterfaceId", {
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            set: function (value) {
                this._networkInterfaceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "networkInterfaceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkInterfaceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "status", {
            // status - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status');
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NetworkInterfaceAttachmentA.prototype.synthesizeAttributes = function () {
            return {
                device_index: cdktf.numberToTerraform(this._deviceIndex),
                instance_id: cdktf.stringToTerraform(this._instanceId),
                network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NetworkInterfaceAttachmentA.tfResourceType = "aws_network_interface_attachment";
        return NetworkInterfaceAttachmentA;
    }(cdktf.TerraformResource));
    VPC.NetworkInterfaceAttachmentA = NetworkInterfaceAttachmentA;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment}
    */
    var NetworkInterfaceSgAttachment = /** @class */ (function (_super) {
        __extends(NetworkInterfaceSgAttachment, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options NetworkInterfaceSgAttachmentConfig
        */
        function NetworkInterfaceSgAttachment(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_interface_sg_attachment',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._networkInterfaceId = config.networkInterfaceId;
            _this._securityGroupId = config.securityGroupId;
            return _this;
        }
        Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "networkInterfaceId", {
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            set: function (value) {
                this._networkInterfaceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "networkInterfaceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkInterfaceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "securityGroupId", {
            get: function () {
                return this.getStringAttribute('security_group_id');
            },
            set: function (value) {
                this._securityGroupId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "securityGroupIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroupId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        NetworkInterfaceSgAttachment.prototype.synthesizeAttributes = function () {
            return {
                network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
                security_group_id: cdktf.stringToTerraform(this._securityGroupId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        NetworkInterfaceSgAttachment.tfResourceType = "aws_network_interface_sg_attachment";
        return NetworkInterfaceSgAttachment;
    }(cdktf.TerraformResource));
    VPC.NetworkInterfaceSgAttachment = NetworkInterfaceSgAttachment;
    function routeTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var RouteTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(RouteTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function RouteTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(RouteTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return RouteTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.RouteTimeoutsOutputReference = RouteTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route}
    */
    var Route = /** @class */ (function (_super) {
        __extends(Route, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options RouteConfig
        */
        function Route(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new RouteTimeoutsOutputReference(_this, "timeouts", true);
            _this._carrierGatewayId = config.carrierGatewayId;
            _this._destinationCidrBlock = config.destinationCidrBlock;
            _this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
            _this._destinationPrefixListId = config.destinationPrefixListId;
            _this._egressOnlyGatewayId = config.egressOnlyGatewayId;
            _this._gatewayId = config.gatewayId;
            _this._instanceId = config.instanceId;
            _this._localGatewayId = config.localGatewayId;
            _this._natGatewayId = config.natGatewayId;
            _this._networkInterfaceId = config.networkInterfaceId;
            _this._routeTableId = config.routeTableId;
            _this._transitGatewayId = config.transitGatewayId;
            _this._vpcEndpointId = config.vpcEndpointId;
            _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(Route.prototype, "carrierGatewayId", {
            get: function () {
                return this.getStringAttribute('carrier_gateway_id');
            },
            set: function (value) {
                this._carrierGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetCarrierGatewayId = function () {
            this._carrierGatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "carrierGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._carrierGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "destinationCidrBlock", {
            get: function () {
                return this.getStringAttribute('destination_cidr_block');
            },
            set: function (value) {
                this._destinationCidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetDestinationCidrBlock = function () {
            this._destinationCidrBlock = undefined;
        };
        Object.defineProperty(Route.prototype, "destinationCidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationCidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "destinationIpv6CidrBlock", {
            get: function () {
                return this.getStringAttribute('destination_ipv6_cidr_block');
            },
            set: function (value) {
                this._destinationIpv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetDestinationIpv6CidrBlock = function () {
            this._destinationIpv6CidrBlock = undefined;
        };
        Object.defineProperty(Route.prototype, "destinationIpv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationIpv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "destinationPrefixListId", {
            get: function () {
                return this.getStringAttribute('destination_prefix_list_id');
            },
            set: function (value) {
                this._destinationPrefixListId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetDestinationPrefixListId = function () {
            this._destinationPrefixListId = undefined;
        };
        Object.defineProperty(Route.prototype, "destinationPrefixListIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationPrefixListId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "egressOnlyGatewayId", {
            get: function () {
                return this.getStringAttribute('egress_only_gateway_id');
            },
            set: function (value) {
                this._egressOnlyGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetEgressOnlyGatewayId = function () {
            this._egressOnlyGatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "egressOnlyGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egressOnlyGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "gatewayId", {
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            set: function (value) {
                this._gatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetGatewayId = function () {
            this._gatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "gatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._gatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "instanceId", {
            get: function () {
                return this.getStringAttribute('instance_id');
            },
            set: function (value) {
                this._instanceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetInstanceId = function () {
            this._instanceId = undefined;
        };
        Object.defineProperty(Route.prototype, "instanceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instanceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "instanceOwnerId", {
            // instance_owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "localGatewayId", {
            get: function () {
                return this.getStringAttribute('local_gateway_id');
            },
            set: function (value) {
                this._localGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetLocalGatewayId = function () {
            this._localGatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "localGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._localGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "natGatewayId", {
            get: function () {
                return this.getStringAttribute('nat_gateway_id');
            },
            set: function (value) {
                this._natGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetNatGatewayId = function () {
            this._natGatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "natGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._natGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "networkInterfaceId", {
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            set: function (value) {
                this._networkInterfaceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetNetworkInterfaceId = function () {
            this._networkInterfaceId = undefined;
        };
        Object.defineProperty(Route.prototype, "networkInterfaceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkInterfaceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "origin", {
            // origin - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('origin');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "transitGatewayId", {
            get: function () {
                return this.getStringAttribute('transit_gateway_id');
            },
            set: function (value) {
                this._transitGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetTransitGatewayId = function () {
            this._transitGatewayId = undefined;
        };
        Object.defineProperty(Route.prototype, "transitGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._transitGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "vpcEndpointId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_id');
            },
            set: function (value) {
                this._vpcEndpointId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetVpcEndpointId = function () {
            this._vpcEndpointId = undefined;
        };
        Object.defineProperty(Route.prototype, "vpcEndpointIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "vpcPeeringConnectionId", {
            get: function () {
                return this.getStringAttribute('vpc_peering_connection_id');
            },
            set: function (value) {
                this._vpcPeeringConnectionId = value;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.resetVpcPeeringConnectionId = function () {
            this._vpcPeeringConnectionId = undefined;
        };
        Object.defineProperty(Route.prototype, "vpcPeeringConnectionIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcPeeringConnectionId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Route.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Route.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        Route.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(Route.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Route.prototype.synthesizeAttributes = function () {
            return {
                carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
                destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
                destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
                destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
                egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
                gateway_id: cdktf.stringToTerraform(this._gatewayId),
                instance_id: cdktf.stringToTerraform(this._instanceId),
                local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
                nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
                network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
                vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
                vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
                timeouts: routeTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Route.tfResourceType = "aws_route";
        return Route;
    }(cdktf.TerraformResource));
    VPC.Route = Route;
    function routeTableRouteToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            carrier_gateway_id: struct.carrierGatewayId === undefined ? null : cdktf.stringToTerraform(struct.carrierGatewayId),
            cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
            destination_prefix_list_id: struct.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct.destinationPrefixListId),
            egress_only_gateway_id: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct.egressOnlyGatewayId),
            gateway_id: struct.gatewayId === undefined ? null : cdktf.stringToTerraform(struct.gatewayId),
            instance_id: struct.instanceId === undefined ? null : cdktf.stringToTerraform(struct.instanceId),
            ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
            local_gateway_id: struct.localGatewayId === undefined ? null : cdktf.stringToTerraform(struct.localGatewayId),
            nat_gateway_id: struct.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct.natGatewayId),
            network_interface_id: struct.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct.networkInterfaceId),
            transit_gateway_id: struct.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct.transitGatewayId),
            vpc_endpoint_id: struct.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct.vpcEndpointId),
            vpc_peering_connection_id: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct.vpcPeeringConnectionId)
        };
    }
    function routeTableTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var RouteTableTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(RouteTableTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function RouteTableTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTableTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTableTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTableTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(RouteTableTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return RouteTableTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.RouteTableTimeoutsOutputReference = RouteTableTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table}
    */
    var RouteTable = /** @class */ (function (_super) {
        __extends(RouteTable, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options RouteTableConfig
        */
        function RouteTable(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route_table',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new RouteTableTimeoutsOutputReference(_this, "timeouts", true);
            _this._propagatingVgws = config.propagatingVgws;
            _this._route = config.route;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(RouteTable.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "propagatingVgws", {
            get: function () {
                return this.getListAttribute('propagating_vgws');
            },
            set: function (value) {
                this._propagatingVgws = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTable.prototype.resetPropagatingVgws = function () {
            this._propagatingVgws = undefined;
        };
        Object.defineProperty(RouteTable.prototype, "propagatingVgwsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._propagatingVgws;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "route", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('route');
            },
            set: function (value) {
                this._route = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTable.prototype.resetRoute = function () {
            this._route = undefined;
        };
        Object.defineProperty(RouteTable.prototype, "routeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._route;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTable.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(RouteTable.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTable.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(RouteTable.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTable.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        RouteTable.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        RouteTable.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(RouteTable.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        RouteTable.prototype.synthesizeAttributes = function () {
            return {
                propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
                route: cdktf.listMapper(routeTableRouteToTerraform)(this._route),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                timeouts: routeTableTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        RouteTable.tfResourceType = "aws_route_table";
        return RouteTable;
    }(cdktf.TerraformResource));
    VPC.RouteTable = RouteTable;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association}
    */
    var RouteTableAssociation = /** @class */ (function (_super) {
        __extends(RouteTableAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options RouteTableAssociationConfig
        */
        function RouteTableAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route_table_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._gatewayId = config.gatewayId;
            _this._routeTableId = config.routeTableId;
            _this._subnetId = config.subnetId;
            return _this;
        }
        Object.defineProperty(RouteTableAssociation.prototype, "gatewayId", {
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            set: function (value) {
                this._gatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTableAssociation.prototype.resetGatewayId = function () {
            this._gatewayId = undefined;
        };
        Object.defineProperty(RouteTableAssociation.prototype, "gatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._gatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableAssociation.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableAssociation.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableAssociation.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RouteTableAssociation.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        RouteTableAssociation.prototype.resetSubnetId = function () {
            this._subnetId = undefined;
        };
        Object.defineProperty(RouteTableAssociation.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        RouteTableAssociation.prototype.synthesizeAttributes = function () {
            return {
                gateway_id: cdktf.stringToTerraform(this._gatewayId),
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                subnet_id: cdktf.stringToTerraform(this._subnetId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        RouteTableAssociation.tfResourceType = "aws_route_table_association";
        return RouteTableAssociation;
    }(cdktf.TerraformResource));
    VPC.RouteTableAssociation = RouteTableAssociation;
    function securityGroupEgressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
            description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
            prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
            self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    function securityGroupIngressToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
            description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
            from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
            ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
            prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
            protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
            security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
            self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
            to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
        };
    }
    function securityGroupTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var SecurityGroupTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(SecurityGroupTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function SecurityGroupTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(SecurityGroupTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(SecurityGroupTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(SecurityGroupTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return SecurityGroupTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.SecurityGroupTimeoutsOutputReference = SecurityGroupTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}
    */
    var SecurityGroup = /** @class */ (function (_super) {
        __extends(SecurityGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options SecurityGroupConfig = {}
        */
        function SecurityGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_security_group',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new SecurityGroupTimeoutsOutputReference(_this, "timeouts", true);
            _this._description = config.description;
            _this._egress = config.egress;
            _this._ingress = config.ingress;
            _this._name = config.name;
            _this._namePrefix = config.namePrefix;
            _this._revokeRulesOnDelete = config.revokeRulesOnDelete;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(SecurityGroup.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "description", {
            get: function () {
                return this.getStringAttribute('description');
            },
            set: function (value) {
                this._description = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetDescription = function () {
            this._description = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "descriptionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._description;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "egress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('egress');
            },
            set: function (value) {
                this._egress = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetEgress = function () {
            this._egress = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "egressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "ingress", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('ingress');
            },
            set: function (value) {
                this._ingress = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetIngress = function () {
            this._ingress = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "ingressInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ingress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "namePrefix", {
            get: function () {
                return this.getStringAttribute('name_prefix');
            },
            set: function (value) {
                this._namePrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetNamePrefix = function () {
            this._namePrefix = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "namePrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "revokeRulesOnDelete", {
            get: function () {
                return this.getBooleanAttribute('revoke_rules_on_delete');
            },
            set: function (value) {
                this._revokeRulesOnDelete = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetRevokeRulesOnDelete = function () {
            this._revokeRulesOnDelete = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "revokeRulesOnDeleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._revokeRulesOnDelete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroup.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroup.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        SecurityGroup.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(SecurityGroup.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        SecurityGroup.prototype.synthesizeAttributes = function () {
            return {
                description: cdktf.stringToTerraform(this._description),
                egress: cdktf.listMapper(securityGroupEgressToTerraform)(this._egress),
                ingress: cdktf.listMapper(securityGroupIngressToTerraform)(this._ingress),
                name: cdktf.stringToTerraform(this._name),
                name_prefix: cdktf.stringToTerraform(this._namePrefix),
                revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                timeouts: securityGroupTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        SecurityGroup.tfResourceType = "aws_security_group";
        return SecurityGroup;
    }(cdktf.TerraformResource));
    VPC.SecurityGroup = SecurityGroup;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule}
    */
    var SecurityGroupRule = /** @class */ (function (_super) {
        __extends(SecurityGroupRule, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options SecurityGroupRuleConfig
        */
        function SecurityGroupRule(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_security_group_rule',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cidrBlocks = config.cidrBlocks;
            _this._description = config.description;
            _this._fromPort = config.fromPort;
            _this._ipv6CidrBlocks = config.ipv6CidrBlocks;
            _this._prefixListIds = config.prefixListIds;
            _this._protocol = config.protocol;
            _this._securityGroupId = config.securityGroupId;
            _this._self = config.selfAttribute;
            _this._sourceSecurityGroupId = config.sourceSecurityGroupId;
            _this._toPort = config.toPort;
            _this._type = config.type;
            return _this;
        }
        Object.defineProperty(SecurityGroupRule.prototype, "cidrBlocks", {
            get: function () {
                return this.getListAttribute('cidr_blocks');
            },
            set: function (value) {
                this._cidrBlocks = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetCidrBlocks = function () {
            this._cidrBlocks = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "cidrBlocksInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlocks;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "description", {
            get: function () {
                return this.getStringAttribute('description');
            },
            set: function (value) {
                this._description = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetDescription = function () {
            this._description = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "descriptionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._description;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "fromPort", {
            get: function () {
                return this.getNumberAttribute('from_port');
            },
            set: function (value) {
                this._fromPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "fromPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._fromPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "ipv6CidrBlocks", {
            get: function () {
                return this.getListAttribute('ipv6_cidr_blocks');
            },
            set: function (value) {
                this._ipv6CidrBlocks = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetIpv6CidrBlocks = function () {
            this._ipv6CidrBlocks = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "ipv6CidrBlocksInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6CidrBlocks;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "prefixListIds", {
            get: function () {
                return this.getListAttribute('prefix_list_ids');
            },
            set: function (value) {
                this._prefixListIds = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetPrefixListIds = function () {
            this._prefixListIds = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "prefixListIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._prefixListIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "securityGroupId", {
            get: function () {
                return this.getStringAttribute('security_group_id');
            },
            set: function (value) {
                this._securityGroupId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "securityGroupIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroupId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "selfAttribute", {
            get: function () {
                return this.getBooleanAttribute('self');
            },
            set: function (value) {
                this._self = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetSelfAttribute = function () {
            this._self = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "selfAttributeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._self;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "sourceSecurityGroupId", {
            get: function () {
                return this.getStringAttribute('source_security_group_id');
            },
            set: function (value) {
                this._sourceSecurityGroupId = value;
            },
            enumerable: false,
            configurable: true
        });
        SecurityGroupRule.prototype.resetSourceSecurityGroupId = function () {
            this._sourceSecurityGroupId = undefined;
        };
        Object.defineProperty(SecurityGroupRule.prototype, "sourceSecurityGroupIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sourceSecurityGroupId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "toPort", {
            get: function () {
                return this.getNumberAttribute('to_port');
            },
            set: function (value) {
                this._toPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "toPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._toPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SecurityGroupRule.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        SecurityGroupRule.prototype.synthesizeAttributes = function () {
            return {
                cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrBlocks),
                description: cdktf.stringToTerraform(this._description),
                from_port: cdktf.numberToTerraform(this._fromPort),
                ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6CidrBlocks),
                prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._prefixListIds),
                protocol: cdktf.stringToTerraform(this._protocol),
                security_group_id: cdktf.stringToTerraform(this._securityGroupId),
                self: cdktf.booleanToTerraform(this._self),
                source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
                to_port: cdktf.numberToTerraform(this._toPort),
                type: cdktf.stringToTerraform(this._type)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        SecurityGroupRule.tfResourceType = "aws_security_group_rule";
        return SecurityGroupRule;
    }(cdktf.TerraformResource));
    VPC.SecurityGroupRule = SecurityGroupRule;
    function subnetTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var SubnetTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(SubnetTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function SubnetTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(SubnetTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        SubnetTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(SubnetTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SubnetTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        SubnetTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(SubnetTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return SubnetTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.SubnetTimeoutsOutputReference = SubnetTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}
    */
    var Subnet = /** @class */ (function (_super) {
        __extends(Subnet, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options SubnetConfig
        */
        function Subnet(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_subnet',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new SubnetTimeoutsOutputReference(_this, "timeouts", true);
            _this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
            _this._availabilityZone = config.availabilityZone;
            _this._availabilityZoneId = config.availabilityZoneId;
            _this._cidrBlock = config.cidrBlock;
            _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
            _this._ipv6CidrBlock = config.ipv6CidrBlock;
            _this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
            _this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
            _this._outpostArn = config.outpostArn;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(Subnet.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "assignIpv6AddressOnCreation", {
            get: function () {
                return this.getBooleanAttribute('assign_ipv6_address_on_creation');
            },
            set: function (value) {
                this._assignIpv6AddressOnCreation = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetAssignIpv6AddressOnCreation = function () {
            this._assignIpv6AddressOnCreation = undefined;
        };
        Object.defineProperty(Subnet.prototype, "assignIpv6AddressOnCreationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._assignIpv6AddressOnCreation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(Subnet.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "availabilityZoneId", {
            get: function () {
                return this.getStringAttribute('availability_zone_id');
            },
            set: function (value) {
                this._availabilityZoneId = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetAvailabilityZoneId = function () {
            this._availabilityZoneId = undefined;
        };
        Object.defineProperty(Subnet.prototype, "availabilityZoneIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZoneId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "customerOwnedIpv4Pool", {
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            set: function (value) {
                this._customerOwnedIpv4Pool = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetCustomerOwnedIpv4Pool = function () {
            this._customerOwnedIpv4Pool = undefined;
        };
        Object.defineProperty(Subnet.prototype, "customerOwnedIpv4PoolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._customerOwnedIpv4Pool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "ipv6CidrBlock", {
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            set: function (value) {
                this._ipv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetIpv6CidrBlock = function () {
            this._ipv6CidrBlock = undefined;
        };
        Object.defineProperty(Subnet.prototype, "ipv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "ipv6CidrBlockAssociationId", {
            // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "mapCustomerOwnedIpOnLaunch", {
            get: function () {
                return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
            },
            set: function (value) {
                this._mapCustomerOwnedIpOnLaunch = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetMapCustomerOwnedIpOnLaunch = function () {
            this._mapCustomerOwnedIpOnLaunch = undefined;
        };
        Object.defineProperty(Subnet.prototype, "mapCustomerOwnedIpOnLaunchInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._mapCustomerOwnedIpOnLaunch;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "mapPublicIpOnLaunch", {
            get: function () {
                return this.getBooleanAttribute('map_public_ip_on_launch');
            },
            set: function (value) {
                this._mapPublicIpOnLaunch = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetMapPublicIpOnLaunch = function () {
            this._mapPublicIpOnLaunch = undefined;
        };
        Object.defineProperty(Subnet.prototype, "mapPublicIpOnLaunchInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._mapPublicIpOnLaunch;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "outpostArn", {
            get: function () {
                return this.getStringAttribute('outpost_arn');
            },
            set: function (value) {
                this._outpostArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetOutpostArn = function () {
            this._outpostArn = undefined;
        };
        Object.defineProperty(Subnet.prototype, "outpostArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._outpostArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Subnet.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Subnet.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Subnet.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Subnet.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        Subnet.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(Subnet.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Subnet.prototype.synthesizeAttributes = function () {
            return {
                assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
                ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
                map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
                map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
                outpost_arn: cdktf.stringToTerraform(this._outpostArn),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                timeouts: subnetTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Subnet.tfResourceType = "aws_subnet";
        return Subnet;
    }(cdktf.TerraformResource));
    VPC.Subnet = Subnet;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc}
    */
    var Vpc = /** @class */ (function (_super) {
        __extends(Vpc, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcConfig
        */
        function Vpc(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
            _this._cidrBlock = config.cidrBlock;
            _this._enableClassiclink = config.enableClassiclink;
            _this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
            _this._enableDnsHostnames = config.enableDnsHostnames;
            _this._enableDnsSupport = config.enableDnsSupport;
            _this._instanceTenancy = config.instanceTenancy;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(Vpc.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "assignGeneratedIpv6CidrBlock", {
            get: function () {
                return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
            },
            set: function (value) {
                this._assignGeneratedIpv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetAssignGeneratedIpv6CidrBlock = function () {
            this._assignGeneratedIpv6CidrBlock = undefined;
        };
        Object.defineProperty(Vpc.prototype, "assignGeneratedIpv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._assignGeneratedIpv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "defaultNetworkAclId", {
            // default_network_acl_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_network_acl_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "defaultRouteTableId", {
            // default_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "defaultSecurityGroupId", {
            // default_security_group_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('default_security_group_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "dhcpOptionsId", {
            // dhcp_options_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dhcp_options_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "enableClassiclink", {
            get: function () {
                return this.getBooleanAttribute('enable_classiclink');
            },
            set: function (value) {
                this._enableClassiclink = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetEnableClassiclink = function () {
            this._enableClassiclink = undefined;
        };
        Object.defineProperty(Vpc.prototype, "enableClassiclinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableClassiclink;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "enableClassiclinkDnsSupport", {
            get: function () {
                return this.getBooleanAttribute('enable_classiclink_dns_support');
            },
            set: function (value) {
                this._enableClassiclinkDnsSupport = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetEnableClassiclinkDnsSupport = function () {
            this._enableClassiclinkDnsSupport = undefined;
        };
        Object.defineProperty(Vpc.prototype, "enableClassiclinkDnsSupportInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableClassiclinkDnsSupport;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "enableDnsHostnames", {
            get: function () {
                return this.getBooleanAttribute('enable_dns_hostnames');
            },
            set: function (value) {
                this._enableDnsHostnames = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetEnableDnsHostnames = function () {
            this._enableDnsHostnames = undefined;
        };
        Object.defineProperty(Vpc.prototype, "enableDnsHostnamesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDnsHostnames;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "enableDnsSupport", {
            get: function () {
                return this.getBooleanAttribute('enable_dns_support');
            },
            set: function (value) {
                this._enableDnsSupport = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetEnableDnsSupport = function () {
            this._enableDnsSupport = undefined;
        };
        Object.defineProperty(Vpc.prototype, "enableDnsSupportInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDnsSupport;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "instanceTenancy", {
            get: function () {
                return this.getStringAttribute('instance_tenancy');
            },
            set: function (value) {
                this._instanceTenancy = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetInstanceTenancy = function () {
            this._instanceTenancy = undefined;
        };
        Object.defineProperty(Vpc.prototype, "instanceTenancyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instanceTenancy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "ipv6AssociationId", {
            // ipv6_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "ipv6CidrBlock", {
            // ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "mainRouteTableId", {
            // main_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('main_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Vpc.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vpc.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Vpc.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Vpc.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Vpc.prototype.synthesizeAttributes = function () {
            return {
                assign_generated_ipv6_cidr_block: cdktf.booleanToTerraform(this._assignGeneratedIpv6CidrBlock),
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
                enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
                enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
                enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
                instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Vpc.tfResourceType = "aws_vpc";
        return Vpc;
    }(cdktf.TerraformResource));
    VPC.Vpc = Vpc;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options}
    */
    var VpcDhcpOptions = /** @class */ (function (_super) {
        __extends(VpcDhcpOptions, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcDhcpOptionsConfig = {}
        */
        function VpcDhcpOptions(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_dhcp_options',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._domainName = config.domainName;
            _this._domainNameServers = config.domainNameServers;
            _this._netbiosNameServers = config.netbiosNameServers;
            _this._netbiosNodeType = config.netbiosNodeType;
            _this._ntpServers = config.ntpServers;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(VpcDhcpOptions.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "domainName", {
            get: function () {
                return this.getStringAttribute('domain_name');
            },
            set: function (value) {
                this._domainName = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetDomainName = function () {
            this._domainName = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "domainNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._domainName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "domainNameServers", {
            get: function () {
                return this.getListAttribute('domain_name_servers');
            },
            set: function (value) {
                this._domainNameServers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetDomainNameServers = function () {
            this._domainNameServers = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "domainNameServersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._domainNameServers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNameServers", {
            get: function () {
                return this.getListAttribute('netbios_name_servers');
            },
            set: function (value) {
                this._netbiosNameServers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetNetbiosNameServers = function () {
            this._netbiosNameServers = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNameServersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._netbiosNameServers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNodeType", {
            get: function () {
                return this.getStringAttribute('netbios_node_type');
            },
            set: function (value) {
                this._netbiosNodeType = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetNetbiosNodeType = function () {
            this._netbiosNodeType = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNodeTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._netbiosNodeType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "ntpServers", {
            get: function () {
                return this.getListAttribute('ntp_servers');
            },
            set: function (value) {
                this._ntpServers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetNtpServers = function () {
            this._ntpServers = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "ntpServersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ntpServers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptions.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcDhcpOptions.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpcDhcpOptions.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcDhcpOptions.prototype.synthesizeAttributes = function () {
            return {
                domain_name: cdktf.stringToTerraform(this._domainName),
                domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._domainNameServers),
                netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
                netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
                ntp_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._ntpServers),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcDhcpOptions.tfResourceType = "aws_vpc_dhcp_options";
        return VpcDhcpOptions;
    }(cdktf.TerraformResource));
    VPC.VpcDhcpOptions = VpcDhcpOptions;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association}
    */
    var VpcDhcpOptionsAssociation = /** @class */ (function (_super) {
        __extends(VpcDhcpOptionsAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcDhcpOptionsAssociationConfig
        */
        function VpcDhcpOptionsAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_dhcp_options_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._dhcpOptionsId = config.dhcpOptionsId;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "dhcpOptionsId", {
            get: function () {
                return this.getStringAttribute('dhcp_options_id');
            },
            set: function (value) {
                this._dhcpOptionsId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "dhcpOptionsIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._dhcpOptionsId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcDhcpOptionsAssociation.prototype.synthesizeAttributes = function () {
            return {
                dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcDhcpOptionsAssociation.tfResourceType = "aws_vpc_dhcp_options_association";
        return VpcDhcpOptionsAssociation;
    }(cdktf.TerraformResource));
    VPC.VpcDhcpOptionsAssociation = VpcDhcpOptionsAssociation;
    var VpcEndpointDnsEntry = /** @class */ (function (_super) {
        __extends(VpcEndpointDnsEntry, _super);
        function VpcEndpointDnsEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VpcEndpointDnsEntry.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointDnsEntry.prototype, "hostedZoneId", {
            // hosted_zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('hosted_zone_id');
            },
            enumerable: false,
            configurable: true
        });
        return VpcEndpointDnsEntry;
    }(cdktf.ComplexComputedList));
    VPC.VpcEndpointDnsEntry = VpcEndpointDnsEntry;
    function vpcEndpointTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var VpcEndpointTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(VpcEndpointTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcEndpointTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(VpcEndpointTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return VpcEndpointTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcEndpointTimeoutsOutputReference = VpcEndpointTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}
    */
    var VpcEndpoint = /** @class */ (function (_super) {
        __extends(VpcEndpoint, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointConfig
        */
        function VpcEndpoint(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new VpcEndpointTimeoutsOutputReference(_this, "timeouts", true);
            _this._autoAccept = config.autoAccept;
            _this._policy = config.policy;
            _this._privateDnsEnabled = config.privateDnsEnabled;
            _this._routeTableIds = config.routeTableIds;
            _this._securityGroupIds = config.securityGroupIds;
            _this._serviceName = config.serviceName;
            _this._subnetIds = config.subnetIds;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcEndpointType = config.vpcEndpointType;
            _this._vpcId = config.vpcId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(VpcEndpoint.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "autoAccept", {
            get: function () {
                return this.getBooleanAttribute('auto_accept');
            },
            set: function (value) {
                this._autoAccept = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetAutoAccept = function () {
            this._autoAccept = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "autoAcceptInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._autoAccept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "cidrBlocks", {
            // cidr_blocks - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('cidr_blocks');
            },
            enumerable: false,
            configurable: true
        });
        // dns_entry - computed: true, optional: false, required: false
        VpcEndpoint.prototype.dnsEntry = function (index) {
            return new VpcEndpointDnsEntry(this, 'dns_entry', index);
        };
        Object.defineProperty(VpcEndpoint.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "networkInterfaceIds", {
            // network_interface_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('network_interface_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "policy", {
            get: function () {
                return this.getStringAttribute('policy');
            },
            set: function (value) {
                this._policy = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetPolicy = function () {
            this._policy = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "policyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "prefixListId", {
            // prefix_list_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('prefix_list_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "privateDnsEnabled", {
            get: function () {
                return this.getBooleanAttribute('private_dns_enabled');
            },
            set: function (value) {
                this._privateDnsEnabled = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetPrivateDnsEnabled = function () {
            this._privateDnsEnabled = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "privateDnsEnabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._privateDnsEnabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "requesterManaged", {
            // requester_managed - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('requester_managed');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "routeTableIds", {
            get: function () {
                return this.getListAttribute('route_table_ids');
            },
            set: function (value) {
                this._routeTableIds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetRouteTableIds = function () {
            this._routeTableIds = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "routeTableIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "securityGroupIds", {
            get: function () {
                return this.getListAttribute('security_group_ids');
            },
            set: function (value) {
                this._securityGroupIds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetSecurityGroupIds = function () {
            this._securityGroupIds = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "securityGroupIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroupIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "serviceName", {
            get: function () {
                return this.getStringAttribute('service_name');
            },
            set: function (value) {
                this._serviceName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "serviceNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._serviceName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "subnetIds", {
            get: function () {
                return this.getListAttribute('subnet_ids');
            },
            set: function (value) {
                this._subnetIds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetSubnetIds = function () {
            this._subnetIds = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "subnetIdsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetIds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "vpcEndpointType", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_type');
            },
            set: function (value) {
                this._vpcEndpointType = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.resetVpcEndpointType = function () {
            this._vpcEndpointType = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "vpcEndpointTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpoint.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpoint.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        VpcEndpoint.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(VpcEndpoint.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpoint.prototype.synthesizeAttributes = function () {
            return {
                auto_accept: cdktf.booleanToTerraform(this._autoAccept),
                policy: cdktf.stringToTerraform(this._policy),
                private_dns_enabled: cdktf.booleanToTerraform(this._privateDnsEnabled),
                route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
                security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
                service_name: cdktf.stringToTerraform(this._serviceName),
                subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_endpoint_type: cdktf.stringToTerraform(this._vpcEndpointType),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                timeouts: vpcEndpointTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpoint.tfResourceType = "aws_vpc_endpoint";
        return VpcEndpoint;
    }(cdktf.TerraformResource));
    VPC.VpcEndpoint = VpcEndpoint;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification}
    */
    var VpcEndpointConnectionNotification = /** @class */ (function (_super) {
        __extends(VpcEndpointConnectionNotification, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointConnectionNotificationConfig
        */
        function VpcEndpointConnectionNotification(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_connection_notification',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._connectionEvents = config.connectionEvents;
            _this._connectionNotificationArn = config.connectionNotificationArn;
            _this._vpcEndpointId = config.vpcEndpointId;
            _this._vpcEndpointServiceId = config.vpcEndpointServiceId;
            return _this;
        }
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionEvents", {
            get: function () {
                return this.getListAttribute('connection_events');
            },
            set: function (value) {
                this._connectionEvents = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionEventsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._connectionEvents;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionNotificationArn", {
            get: function () {
                return this.getStringAttribute('connection_notification_arn');
            },
            set: function (value) {
                this._connectionNotificationArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionNotificationArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._connectionNotificationArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "notificationType", {
            // notification_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('notification_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_id');
            },
            set: function (value) {
                this._vpcEndpointId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointConnectionNotification.prototype.resetVpcEndpointId = function () {
            this._vpcEndpointId = undefined;
        };
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointServiceId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_service_id');
            },
            set: function (value) {
                this._vpcEndpointServiceId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointConnectionNotification.prototype.resetVpcEndpointServiceId = function () {
            this._vpcEndpointServiceId = undefined;
        };
        Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointServiceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointServiceId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpointConnectionNotification.prototype.synthesizeAttributes = function () {
            return {
                connection_events: cdktf.listMapper(cdktf.stringToTerraform)(this._connectionEvents),
                connection_notification_arn: cdktf.stringToTerraform(this._connectionNotificationArn),
                vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
                vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpointConnectionNotification.tfResourceType = "aws_vpc_endpoint_connection_notification";
        return VpcEndpointConnectionNotification;
    }(cdktf.TerraformResource));
    VPC.VpcEndpointConnectionNotification = VpcEndpointConnectionNotification;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association}
    */
    var VpcEndpointRouteTableAssociation = /** @class */ (function (_super) {
        __extends(VpcEndpointRouteTableAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointRouteTableAssociationConfig
        */
        function VpcEndpointRouteTableAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_route_table_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._routeTableId = config.routeTableId;
            _this._vpcEndpointId = config.vpcEndpointId;
            return _this;
        }
        Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "vpcEndpointId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_id');
            },
            set: function (value) {
                this._vpcEndpointId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "vpcEndpointIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpointRouteTableAssociation.prototype.synthesizeAttributes = function () {
            return {
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpointRouteTableAssociation.tfResourceType = "aws_vpc_endpoint_route_table_association";
        return VpcEndpointRouteTableAssociation;
    }(cdktf.TerraformResource));
    VPC.VpcEndpointRouteTableAssociation = VpcEndpointRouteTableAssociation;
    var VpcEndpointServicePrivateDnsNameConfiguration = /** @class */ (function (_super) {
        __extends(VpcEndpointServicePrivateDnsNameConfiguration, _super);
        function VpcEndpointServicePrivateDnsNameConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "name", {
            // name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "value", {
            // value - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('value');
            },
            enumerable: false,
            configurable: true
        });
        return VpcEndpointServicePrivateDnsNameConfiguration;
    }(cdktf.ComplexComputedList));
    VPC.VpcEndpointServicePrivateDnsNameConfiguration = VpcEndpointServicePrivateDnsNameConfiguration;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}
    */
    var VpcEndpointService = /** @class */ (function (_super) {
        __extends(VpcEndpointService, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointServiceConfig
        */
        function VpcEndpointService(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_service',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._acceptanceRequired = config.acceptanceRequired;
            _this._allowedPrincipals = config.allowedPrincipals;
            _this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
            _this._networkLoadBalancerArns = config.networkLoadBalancerArns;
            _this._privateDnsName = config.privateDnsName;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            return _this;
        }
        Object.defineProperty(VpcEndpointService.prototype, "acceptanceRequired", {
            get: function () {
                return this.getBooleanAttribute('acceptance_required');
            },
            set: function (value) {
                this._acceptanceRequired = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "acceptanceRequiredInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._acceptanceRequired;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "allowedPrincipals", {
            get: function () {
                return this.getListAttribute('allowed_principals');
            },
            set: function (value) {
                this._allowedPrincipals = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetAllowedPrincipals = function () {
            this._allowedPrincipals = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "allowedPrincipalsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowedPrincipals;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "availabilityZones", {
            // availability_zones - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('availability_zones');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "baseEndpointDnsNames", {
            // base_endpoint_dns_names - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('base_endpoint_dns_names');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "gatewayLoadBalancerArns", {
            get: function () {
                return this.getListAttribute('gateway_load_balancer_arns');
            },
            set: function (value) {
                this._gatewayLoadBalancerArns = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetGatewayLoadBalancerArns = function () {
            this._gatewayLoadBalancerArns = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "gatewayLoadBalancerArnsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._gatewayLoadBalancerArns;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "managesVpcEndpoints", {
            // manages_vpc_endpoints - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('manages_vpc_endpoints');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "networkLoadBalancerArns", {
            get: function () {
                return this.getListAttribute('network_load_balancer_arns');
            },
            set: function (value) {
                this._networkLoadBalancerArns = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetNetworkLoadBalancerArns = function () {
            this._networkLoadBalancerArns = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "networkLoadBalancerArnsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkLoadBalancerArns;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "privateDnsName", {
            get: function () {
                return this.getStringAttribute('private_dns_name');
            },
            set: function (value) {
                this._privateDnsName = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetPrivateDnsName = function () {
            this._privateDnsName = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "privateDnsNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._privateDnsName;
            },
            enumerable: false,
            configurable: true
        });
        // private_dns_name_configuration - computed: true, optional: false, required: false
        VpcEndpointService.prototype.privateDnsNameConfiguration = function (index) {
            return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
        };
        Object.defineProperty(VpcEndpointService.prototype, "serviceName", {
            // service_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('service_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "serviceType", {
            // service_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('service_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointService.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointService.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpcEndpointService.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpointService.prototype.synthesizeAttributes = function () {
            return {
                acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
                allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
                gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
                network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
                private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpointService.tfResourceType = "aws_vpc_endpoint_service";
        return VpcEndpointService;
    }(cdktf.TerraformResource));
    VPC.VpcEndpointService = VpcEndpointService;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal}
    */
    var VpcEndpointServiceAllowedPrincipal = /** @class */ (function (_super) {
        __extends(VpcEndpointServiceAllowedPrincipal, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointServiceAllowedPrincipalConfig
        */
        function VpcEndpointServiceAllowedPrincipal(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._principalArn = config.principalArn;
            _this._vpcEndpointServiceId = config.vpcEndpointServiceId;
            return _this;
        }
        Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "principalArn", {
            get: function () {
                return this.getStringAttribute('principal_arn');
            },
            set: function (value) {
                this._principalArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "principalArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._principalArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "vpcEndpointServiceId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_service_id');
            },
            set: function (value) {
                this._vpcEndpointServiceId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "vpcEndpointServiceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointServiceId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpointServiceAllowedPrincipal.prototype.synthesizeAttributes = function () {
            return {
                principal_arn: cdktf.stringToTerraform(this._principalArn),
                vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpointServiceAllowedPrincipal.tfResourceType = "aws_vpc_endpoint_service_allowed_principal";
        return VpcEndpointServiceAllowedPrincipal;
    }(cdktf.TerraformResource));
    VPC.VpcEndpointServiceAllowedPrincipal = VpcEndpointServiceAllowedPrincipal;
    function vpcEndpointSubnetAssociationTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var VpcEndpointSubnetAssociationTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(VpcEndpointSubnetAssociationTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcEndpointSubnetAssociationTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(VpcEndpointSubnetAssociationTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return VpcEndpointSubnetAssociationTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcEndpointSubnetAssociationTimeoutsOutputReference = VpcEndpointSubnetAssociationTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}
    */
    var VpcEndpointSubnetAssociation = /** @class */ (function (_super) {
        __extends(VpcEndpointSubnetAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcEndpointSubnetAssociationConfig
        */
        function VpcEndpointSubnetAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_subnet_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new VpcEndpointSubnetAssociationTimeoutsOutputReference(_this, "timeouts", true);
            _this._subnetId = config.subnetId;
            _this._vpcEndpointId = config.vpcEndpointId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "vpcEndpointId", {
            get: function () {
                return this.getStringAttribute('vpc_endpoint_id');
            },
            set: function (value) {
                this._vpcEndpointId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "vpcEndpointIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcEndpointId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcEndpointSubnetAssociation.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        VpcEndpointSubnetAssociation.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcEndpointSubnetAssociation.prototype.synthesizeAttributes = function () {
            return {
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
                timeouts: vpcEndpointSubnetAssociationTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcEndpointSubnetAssociation.tfResourceType = "aws_vpc_endpoint_subnet_association";
        return VpcEndpointSubnetAssociation;
    }(cdktf.TerraformResource));
    VPC.VpcEndpointSubnetAssociation = VpcEndpointSubnetAssociation;
    function vpcIpv4CidrBlockAssociationTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var VpcIpv4CidrBlockAssociationTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(VpcIpv4CidrBlockAssociationTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcIpv4CidrBlockAssociationTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(VpcIpv4CidrBlockAssociationTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return VpcIpv4CidrBlockAssociationTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcIpv4CidrBlockAssociationTimeoutsOutputReference = VpcIpv4CidrBlockAssociationTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association}
    */
    var VpcIpv4CidrBlockAssociation = /** @class */ (function (_super) {
        __extends(VpcIpv4CidrBlockAssociation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcIpv4CidrBlockAssociationConfig
        */
        function VpcIpv4CidrBlockAssociation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_ipv4_cidr_block_association',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new VpcIpv4CidrBlockAssociationTimeoutsOutputReference(_this, "timeouts", true);
            _this._cidrBlock = config.cidrBlock;
            _this._vpcId = config.vpcId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcIpv4CidrBlockAssociation.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        VpcIpv4CidrBlockAssociation.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcIpv4CidrBlockAssociation.prototype.synthesizeAttributes = function () {
            return {
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                timeouts: vpcIpv4CidrBlockAssociationTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcIpv4CidrBlockAssociation.tfResourceType = "aws_vpc_ipv4_cidr_block_association";
        return VpcIpv4CidrBlockAssociation;
    }(cdktf.TerraformResource));
    VPC.VpcIpv4CidrBlockAssociation = VpcIpv4CidrBlockAssociation;
    function vpcPeeringConnectionAccepterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionAccepterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionAccepterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionAccepterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionAccepterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionAccepterOutputReference = VpcPeeringConnectionAccepterOutputReference;
    function vpcPeeringConnectionRequesterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionRequesterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionRequesterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionRequesterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionRequesterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionRequesterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionRequesterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionRequesterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionRequesterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionRequesterOutputReference = VpcPeeringConnectionRequesterOutputReference;
    function vpcPeeringConnectionTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var VpcPeeringConnectionTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionTimeoutsOutputReference = VpcPeeringConnectionTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}
    */
    var VpcPeeringConnection = /** @class */ (function (_super) {
        __extends(VpcPeeringConnection, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcPeeringConnectionConfig
        */
        function VpcPeeringConnection(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_peering_connection',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__accepterOutput = new VpcPeeringConnectionAccepterOutputReference(_this, "accepter", true);
            _this.__requesterOutput = new VpcPeeringConnectionRequesterOutputReference(_this, "requester", true);
            _this.__timeoutsOutput = new VpcPeeringConnectionTimeoutsOutputReference(_this, "timeouts", true);
            _this._autoAccept = config.autoAccept;
            _this._peerOwnerId = config.peerOwnerId;
            _this._peerRegion = config.peerRegion;
            _this._peerVpcId = config.peerVpcId;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            _this._accepter = config.accepter;
            _this._requester = config.requester;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(VpcPeeringConnection.prototype, "acceptStatus", {
            // ==========
            // ATTRIBUTES
            // ==========
            // accept_status - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('accept_status');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "autoAccept", {
            get: function () {
                return this.getBooleanAttribute('auto_accept');
            },
            set: function (value) {
                this._autoAccept = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.resetAutoAccept = function () {
            this._autoAccept = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "autoAcceptInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._autoAccept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "peerOwnerId", {
            get: function () {
                return this.getStringAttribute('peer_owner_id');
            },
            set: function (value) {
                this._peerOwnerId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.resetPeerOwnerId = function () {
            this._peerOwnerId = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "peerOwnerIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerOwnerId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "peerRegion", {
            get: function () {
                return this.getStringAttribute('peer_region');
            },
            set: function (value) {
                this._peerRegion = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.resetPeerRegion = function () {
            this._peerRegion = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "peerRegionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerRegion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "peerVpcId", {
            get: function () {
                return this.getStringAttribute('peer_vpc_id');
            },
            set: function (value) {
                this._peerVpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "peerVpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerVpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "accepter", {
            get: function () {
                return this.__accepterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.putAccepter = function (value) {
            this._accepter = value;
        };
        VpcPeeringConnection.prototype.resetAccepter = function () {
            this._accepter = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "accepterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._accepter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "requester", {
            get: function () {
                return this.__requesterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.putRequester = function (value) {
            this._requester = value;
        };
        VpcPeeringConnection.prototype.resetRequester = function () {
            this._requester = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "requesterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._requester;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnection.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnection.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        VpcPeeringConnection.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(VpcPeeringConnection.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcPeeringConnection.prototype.synthesizeAttributes = function () {
            return {
                auto_accept: cdktf.booleanToTerraform(this._autoAccept),
                peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
                peer_region: cdktf.stringToTerraform(this._peerRegion),
                peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                accepter: vpcPeeringConnectionAccepterToTerraform(this._accepter),
                requester: vpcPeeringConnectionRequesterToTerraform(this._requester),
                timeouts: vpcPeeringConnectionTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcPeeringConnection.tfResourceType = "aws_vpc_peering_connection";
        return VpcPeeringConnection;
    }(cdktf.TerraformResource));
    VPC.VpcPeeringConnection = VpcPeeringConnection;
    function vpcPeeringConnectionAccepterAccepterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionAccepterAccepterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionAccepterAccepterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionAccepterAccepterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterAccepterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterAccepterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterAccepterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterAccepterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionAccepterAccepterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionAccepterAccepterOutputReference = VpcPeeringConnectionAccepterAccepterOutputReference;
    function vpcPeeringConnectionAccepterRequesterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionAccepterRequesterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionAccepterRequesterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionAccepterRequesterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterRequesterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterRequesterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterRequesterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterRequesterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionAccepterRequesterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionAccepterRequesterOutputReference = VpcPeeringConnectionAccepterRequesterOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}
    */
    var VpcPeeringConnectionAccepterA = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionAccepterA, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcPeeringConnectionAccepterAConfig
        */
        function VpcPeeringConnectionAccepterA(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_peering_connection_accepter',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__accepterOutput = new VpcPeeringConnectionAccepterAccepterOutputReference(_this, "accepter", true);
            _this.__requesterOutput = new VpcPeeringConnectionAccepterRequesterOutputReference(_this, "requester", true);
            _this._autoAccept = config.autoAccept;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
            _this._accepter = config.accepter;
            _this._requester = config.requester;
            return _this;
        }
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "acceptStatus", {
            // ==========
            // ATTRIBUTES
            // ==========
            // accept_status - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('accept_status');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "autoAccept", {
            get: function () {
                return this.getBooleanAttribute('auto_accept');
            },
            set: function (value) {
                this._autoAccept = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterA.prototype.resetAutoAccept = function () {
            this._autoAccept = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "autoAcceptInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._autoAccept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerOwnerId", {
            // peer_owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('peer_owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerRegion", {
            // peer_region - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('peer_region');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerVpcId", {
            // peer_vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('peer_vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterA.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterA.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcPeeringConnectionId", {
            get: function () {
                return this.getStringAttribute('vpc_peering_connection_id');
            },
            set: function (value) {
                this._vpcPeeringConnectionId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcPeeringConnectionIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcPeeringConnectionId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "accepter", {
            get: function () {
                return this.__accepterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterA.prototype.putAccepter = function (value) {
            this._accepter = value;
        };
        VpcPeeringConnectionAccepterA.prototype.resetAccepter = function () {
            this._accepter = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "accepterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._accepter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "requester", {
            get: function () {
                return this.__requesterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionAccepterA.prototype.putRequester = function (value) {
            this._requester = value;
        };
        VpcPeeringConnectionAccepterA.prototype.resetRequester = function () {
            this._requester = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "requesterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._requester;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcPeeringConnectionAccepterA.prototype.synthesizeAttributes = function () {
            return {
                auto_accept: cdktf.booleanToTerraform(this._autoAccept),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
                accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter),
                requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcPeeringConnectionAccepterA.tfResourceType = "aws_vpc_peering_connection_accepter";
        return VpcPeeringConnectionAccepterA;
    }(cdktf.TerraformResource));
    VPC.VpcPeeringConnectionAccepterA = VpcPeeringConnectionAccepterA;
    function vpcPeeringConnectionOptionsAccepterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionOptionsAccepterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionOptionsAccepterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionOptionsAccepterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsAccepterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsAccepterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsAccepterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsAccepterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionOptionsAccepterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionOptionsAccepterOutputReference = VpcPeeringConnectionOptionsAccepterOutputReference;
    function vpcPeeringConnectionOptionsRequesterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
            allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
            allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
        };
    }
    var VpcPeeringConnectionOptionsRequesterOutputReference = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionOptionsRequesterOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpcPeeringConnectionOptionsRequesterOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpc", {
            get: function () {
                return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
            },
            set: function (value) {
                this._allowClassicLinkToRemoteVpc = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsRequesterOutputReference.prototype.resetAllowClassicLinkToRemoteVpc = function () {
            this._allowClassicLinkToRemoteVpc = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowClassicLinkToRemoteVpcInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowClassicLinkToRemoteVpc;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowRemoteVpcDnsResolution", {
            get: function () {
                return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
            },
            set: function (value) {
                this._allowRemoteVpcDnsResolution = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsRequesterOutputReference.prototype.resetAllowRemoteVpcDnsResolution = function () {
            this._allowRemoteVpcDnsResolution = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowRemoteVpcDnsResolutionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowRemoteVpcDnsResolution;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowVpcToRemoteClassicLink", {
            get: function () {
                return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
            },
            set: function (value) {
                this._allowVpcToRemoteClassicLink = value;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptionsRequesterOutputReference.prototype.resetAllowVpcToRemoteClassicLink = function () {
            this._allowVpcToRemoteClassicLink = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptionsRequesterOutputReference.prototype, "allowVpcToRemoteClassicLinkInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowVpcToRemoteClassicLink;
            },
            enumerable: false,
            configurable: true
        });
        return VpcPeeringConnectionOptionsRequesterOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpcPeeringConnectionOptionsRequesterOutputReference = VpcPeeringConnectionOptionsRequesterOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
    */
    var VpcPeeringConnectionOptions = /** @class */ (function (_super) {
        __extends(VpcPeeringConnectionOptions, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpcPeeringConnectionOptionsConfig
        */
        function VpcPeeringConnectionOptions(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_peering_connection_options',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__accepterOutput = new VpcPeeringConnectionOptionsAccepterOutputReference(_this, "accepter", true);
            _this.__requesterOutput = new VpcPeeringConnectionOptionsRequesterOutputReference(_this, "requester", true);
            _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
            _this._accepter = config.accepter;
            _this._requester = config.requester;
            return _this;
        }
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "vpcPeeringConnectionId", {
            get: function () {
                return this.getStringAttribute('vpc_peering_connection_id');
            },
            set: function (value) {
                this._vpcPeeringConnectionId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "vpcPeeringConnectionIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcPeeringConnectionId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "accepter", {
            get: function () {
                return this.__accepterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptions.prototype.putAccepter = function (value) {
            this._accepter = value;
        };
        VpcPeeringConnectionOptions.prototype.resetAccepter = function () {
            this._accepter = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "accepterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._accepter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "requester", {
            get: function () {
                return this.__requesterOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpcPeeringConnectionOptions.prototype.putRequester = function (value) {
            this._requester = value;
        };
        VpcPeeringConnectionOptions.prototype.resetRequester = function () {
            this._requester = undefined;
        };
        Object.defineProperty(VpcPeeringConnectionOptions.prototype, "requesterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._requester;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpcPeeringConnectionOptions.prototype.synthesizeAttributes = function () {
            return {
                vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
                accepter: vpcPeeringConnectionOptionsAccepterToTerraform(this._accepter),
                requester: vpcPeeringConnectionOptionsRequesterToTerraform(this._requester)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpcPeeringConnectionOptions.tfResourceType = "aws_vpc_peering_connection_options";
        return VpcPeeringConnectionOptions;
    }(cdktf.TerraformResource));
    VPC.VpcPeeringConnectionOptions = VpcPeeringConnectionOptions;
    var VpnConnectionRoutes = /** @class */ (function (_super) {
        __extends(VpnConnectionRoutes, _super);
        function VpnConnectionRoutes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VpnConnectionRoutes.prototype, "destinationCidrBlock", {
            // destination_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('destination_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoutes.prototype, "source", {
            // source - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('source');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoutes.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        return VpnConnectionRoutes;
    }(cdktf.ComplexComputedList));
    VPC.VpnConnectionRoutes = VpnConnectionRoutes;
    var VpnConnectionVgwTelemetry = /** @class */ (function (_super) {
        __extends(VpnConnectionVgwTelemetry, _super);
        function VpnConnectionVgwTelemetry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "acceptedRouteCount", {
            // accepted_route_count - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('accepted_route_count');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "lastStatusChange", {
            // last_status_change - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('last_status_change');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "outsideIpAddress", {
            // outside_ip_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outside_ip_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "status", {
            // status - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "statusMessage", {
            // status_message - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status_message');
            },
            enumerable: false,
            configurable: true
        });
        return VpnConnectionVgwTelemetry;
    }(cdktf.ComplexComputedList));
    VPC.VpnConnectionVgwTelemetry = VpnConnectionVgwTelemetry;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}
    */
    var VpnConnection = /** @class */ (function (_super) {
        __extends(VpnConnection, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpnConnectionConfig
        */
        function VpnConnection(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_connection',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._customerGatewayId = config.customerGatewayId;
            _this._enableAcceleration = config.enableAcceleration;
            _this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
            _this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
            _this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
            _this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
            _this._staticRoutesOnly = config.staticRoutesOnly;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._transitGatewayId = config.transitGatewayId;
            _this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
            _this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
            _this._tunnel1IkeVersions = config.tunnel1IkeVersions;
            _this._tunnel1InsideCidr = config.tunnel1InsideCidr;
            _this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
            _this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
            _this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
            _this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
            _this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
            _this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
            _this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
            _this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
            _this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
            _this._tunnel1PresharedKey = config.tunnel1PresharedKey;
            _this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
            _this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
            _this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
            _this._tunnel1StartupAction = config.tunnel1StartupAction;
            _this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
            _this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
            _this._tunnel2IkeVersions = config.tunnel2IkeVersions;
            _this._tunnel2InsideCidr = config.tunnel2InsideCidr;
            _this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
            _this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
            _this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
            _this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
            _this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
            _this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
            _this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
            _this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
            _this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
            _this._tunnel2PresharedKey = config.tunnel2PresharedKey;
            _this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
            _this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
            _this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
            _this._tunnel2StartupAction = config.tunnel2StartupAction;
            _this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
            _this._type = config.type;
            _this._vpnGatewayId = config.vpnGatewayId;
            return _this;
        }
        Object.defineProperty(VpnConnection.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "customerGatewayConfiguration", {
            // customer_gateway_configuration - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('customer_gateway_configuration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "customerGatewayId", {
            get: function () {
                return this.getStringAttribute('customer_gateway_id');
            },
            set: function (value) {
                this._customerGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "customerGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._customerGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "enableAcceleration", {
            get: function () {
                return this.getBooleanAttribute('enable_acceleration');
            },
            set: function (value) {
                this._enableAcceleration = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetEnableAcceleration = function () {
            this._enableAcceleration = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "enableAccelerationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableAcceleration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "localIpv4NetworkCidr", {
            get: function () {
                return this.getStringAttribute('local_ipv4_network_cidr');
            },
            set: function (value) {
                this._localIpv4NetworkCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetLocalIpv4NetworkCidr = function () {
            this._localIpv4NetworkCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "localIpv4NetworkCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._localIpv4NetworkCidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "localIpv6NetworkCidr", {
            get: function () {
                return this.getStringAttribute('local_ipv6_network_cidr');
            },
            set: function (value) {
                this._localIpv6NetworkCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetLocalIpv6NetworkCidr = function () {
            this._localIpv6NetworkCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "localIpv6NetworkCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._localIpv6NetworkCidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "remoteIpv4NetworkCidr", {
            get: function () {
                return this.getStringAttribute('remote_ipv4_network_cidr');
            },
            set: function (value) {
                this._remoteIpv4NetworkCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetRemoteIpv4NetworkCidr = function () {
            this._remoteIpv4NetworkCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "remoteIpv4NetworkCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._remoteIpv4NetworkCidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "remoteIpv6NetworkCidr", {
            get: function () {
                return this.getStringAttribute('remote_ipv6_network_cidr');
            },
            set: function (value) {
                this._remoteIpv6NetworkCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetRemoteIpv6NetworkCidr = function () {
            this._remoteIpv6NetworkCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "remoteIpv6NetworkCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._remoteIpv6NetworkCidr;
            },
            enumerable: false,
            configurable: true
        });
        // routes - computed: true, optional: false, required: false
        VpnConnection.prototype.routes = function (index) {
            return new VpnConnectionRoutes(this, 'routes', index);
        };
        Object.defineProperty(VpnConnection.prototype, "staticRoutesOnly", {
            get: function () {
                return this.getBooleanAttribute('static_routes_only');
            },
            set: function (value) {
                this._staticRoutesOnly = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetStaticRoutesOnly = function () {
            this._staticRoutesOnly = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "staticRoutesOnlyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._staticRoutesOnly;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "transitGatewayAttachmentId", {
            // transit_gateway_attachment_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('transit_gateway_attachment_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "transitGatewayId", {
            get: function () {
                return this.getStringAttribute('transit_gateway_id');
            },
            set: function (value) {
                this._transitGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTransitGatewayId = function () {
            this._transitGatewayId = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "transitGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._transitGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Address", {
            // tunnel1_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel1_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1BgpAsn", {
            // tunnel1_bgp_asn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel1_bgp_asn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1BgpHoldtime", {
            // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('tunnel1_bgp_holdtime');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1CgwInsideAddress", {
            // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel1_cgw_inside_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutAction", {
            get: function () {
                return this.getStringAttribute('tunnel1_dpd_timeout_action');
            },
            set: function (value) {
                this._tunnel1DpdTimeoutAction = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1DpdTimeoutAction = function () {
            this._tunnel1DpdTimeoutAction = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1DpdTimeoutAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
            },
            set: function (value) {
                this._tunnel1DpdTimeoutSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1DpdTimeoutSeconds = function () {
            this._tunnel1DpdTimeoutSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1DpdTimeoutSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1IkeVersions", {
            get: function () {
                return this.getListAttribute('tunnel1_ike_versions');
            },
            set: function (value) {
                this._tunnel1IkeVersions = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1IkeVersions = function () {
            this._tunnel1IkeVersions = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1IkeVersionsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1IkeVersions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1InsideCidr", {
            get: function () {
                return this.getStringAttribute('tunnel1_inside_cidr');
            },
            set: function (value) {
                this._tunnel1InsideCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1InsideCidr = function () {
            this._tunnel1InsideCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1InsideCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1InsideCidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1InsideIpv6Cidr", {
            get: function () {
                return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
            },
            set: function (value) {
                this._tunnel1InsideIpv6Cidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1InsideIpv6Cidr = function () {
            this._tunnel1InsideIpv6Cidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1InsideIpv6CidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1InsideIpv6Cidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1DhGroupNumbers", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers');
            },
            set: function (value) {
                this._tunnel1Phase1DhGroupNumbers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase1DhGroupNumbers = function () {
            this._tunnel1Phase1DhGroupNumbers = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1DhGroupNumbersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase1DhGroupNumbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1EncryptionAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
            },
            set: function (value) {
                this._tunnel1Phase1EncryptionAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase1EncryptionAlgorithms = function () {
            this._tunnel1Phase1EncryptionAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1EncryptionAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase1EncryptionAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1IntegrityAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
            },
            set: function (value) {
                this._tunnel1Phase1IntegrityAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase1IntegrityAlgorithms = function () {
            this._tunnel1Phase1IntegrityAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1IntegrityAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase1IntegrityAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1LifetimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
            },
            set: function (value) {
                this._tunnel1Phase1LifetimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase1LifetimeSeconds = function () {
            this._tunnel1Phase1LifetimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1LifetimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase1LifetimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2DhGroupNumbers", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers');
            },
            set: function (value) {
                this._tunnel1Phase2DhGroupNumbers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase2DhGroupNumbers = function () {
            this._tunnel1Phase2DhGroupNumbers = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2DhGroupNumbersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase2DhGroupNumbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2EncryptionAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
            },
            set: function (value) {
                this._tunnel1Phase2EncryptionAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase2EncryptionAlgorithms = function () {
            this._tunnel1Phase2EncryptionAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2EncryptionAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase2EncryptionAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2IntegrityAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
            },
            set: function (value) {
                this._tunnel1Phase2IntegrityAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase2IntegrityAlgorithms = function () {
            this._tunnel1Phase2IntegrityAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2IntegrityAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase2IntegrityAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2LifetimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
            },
            set: function (value) {
                this._tunnel1Phase2LifetimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1Phase2LifetimeSeconds = function () {
            this._tunnel1Phase2LifetimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2LifetimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1Phase2LifetimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1PresharedKey", {
            get: function () {
                return this.getStringAttribute('tunnel1_preshared_key');
            },
            set: function (value) {
                this._tunnel1PresharedKey = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1PresharedKey = function () {
            this._tunnel1PresharedKey = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1PresharedKeyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1PresharedKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyFuzzPercentage", {
            get: function () {
                return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
            },
            set: function (value) {
                this._tunnel1RekeyFuzzPercentage = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1RekeyFuzzPercentage = function () {
            this._tunnel1RekeyFuzzPercentage = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyFuzzPercentageInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1RekeyFuzzPercentage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyMarginTimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
            },
            set: function (value) {
                this._tunnel1RekeyMarginTimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1RekeyMarginTimeSeconds = function () {
            this._tunnel1RekeyMarginTimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyMarginTimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1RekeyMarginTimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1ReplayWindowSize", {
            get: function () {
                return this.getNumberAttribute('tunnel1_replay_window_size');
            },
            set: function (value) {
                this._tunnel1ReplayWindowSize = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1ReplayWindowSize = function () {
            this._tunnel1ReplayWindowSize = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1ReplayWindowSizeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1ReplayWindowSize;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1StartupAction", {
            get: function () {
                return this.getStringAttribute('tunnel1_startup_action');
            },
            set: function (value) {
                this._tunnel1StartupAction = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel1StartupAction = function () {
            this._tunnel1StartupAction = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel1StartupActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel1StartupAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel1VgwInsideAddress", {
            // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel1_vgw_inside_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Address", {
            // tunnel2_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel2_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2BgpAsn", {
            // tunnel2_bgp_asn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel2_bgp_asn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2BgpHoldtime", {
            // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('tunnel2_bgp_holdtime');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2CgwInsideAddress", {
            // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel2_cgw_inside_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutAction", {
            get: function () {
                return this.getStringAttribute('tunnel2_dpd_timeout_action');
            },
            set: function (value) {
                this._tunnel2DpdTimeoutAction = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2DpdTimeoutAction = function () {
            this._tunnel2DpdTimeoutAction = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2DpdTimeoutAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
            },
            set: function (value) {
                this._tunnel2DpdTimeoutSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2DpdTimeoutSeconds = function () {
            this._tunnel2DpdTimeoutSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2DpdTimeoutSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2IkeVersions", {
            get: function () {
                return this.getListAttribute('tunnel2_ike_versions');
            },
            set: function (value) {
                this._tunnel2IkeVersions = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2IkeVersions = function () {
            this._tunnel2IkeVersions = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2IkeVersionsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2IkeVersions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2InsideCidr", {
            get: function () {
                return this.getStringAttribute('tunnel2_inside_cidr');
            },
            set: function (value) {
                this._tunnel2InsideCidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2InsideCidr = function () {
            this._tunnel2InsideCidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2InsideCidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2InsideCidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2InsideIpv6Cidr", {
            get: function () {
                return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
            },
            set: function (value) {
                this._tunnel2InsideIpv6Cidr = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2InsideIpv6Cidr = function () {
            this._tunnel2InsideIpv6Cidr = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2InsideIpv6CidrInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2InsideIpv6Cidr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1DhGroupNumbers", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers');
            },
            set: function (value) {
                this._tunnel2Phase1DhGroupNumbers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase1DhGroupNumbers = function () {
            this._tunnel2Phase1DhGroupNumbers = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1DhGroupNumbersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase1DhGroupNumbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1EncryptionAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
            },
            set: function (value) {
                this._tunnel2Phase1EncryptionAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase1EncryptionAlgorithms = function () {
            this._tunnel2Phase1EncryptionAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1EncryptionAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase1EncryptionAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1IntegrityAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
            },
            set: function (value) {
                this._tunnel2Phase1IntegrityAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase1IntegrityAlgorithms = function () {
            this._tunnel2Phase1IntegrityAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1IntegrityAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase1IntegrityAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1LifetimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
            },
            set: function (value) {
                this._tunnel2Phase1LifetimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase1LifetimeSeconds = function () {
            this._tunnel2Phase1LifetimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1LifetimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase1LifetimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2DhGroupNumbers", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers');
            },
            set: function (value) {
                this._tunnel2Phase2DhGroupNumbers = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase2DhGroupNumbers = function () {
            this._tunnel2Phase2DhGroupNumbers = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2DhGroupNumbersInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase2DhGroupNumbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2EncryptionAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
            },
            set: function (value) {
                this._tunnel2Phase2EncryptionAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase2EncryptionAlgorithms = function () {
            this._tunnel2Phase2EncryptionAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2EncryptionAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase2EncryptionAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2IntegrityAlgorithms", {
            get: function () {
                return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
            },
            set: function (value) {
                this._tunnel2Phase2IntegrityAlgorithms = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase2IntegrityAlgorithms = function () {
            this._tunnel2Phase2IntegrityAlgorithms = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2IntegrityAlgorithmsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase2IntegrityAlgorithms;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2LifetimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
            },
            set: function (value) {
                this._tunnel2Phase2LifetimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2Phase2LifetimeSeconds = function () {
            this._tunnel2Phase2LifetimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2LifetimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2Phase2LifetimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2PresharedKey", {
            get: function () {
                return this.getStringAttribute('tunnel2_preshared_key');
            },
            set: function (value) {
                this._tunnel2PresharedKey = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2PresharedKey = function () {
            this._tunnel2PresharedKey = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2PresharedKeyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2PresharedKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyFuzzPercentage", {
            get: function () {
                return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
            },
            set: function (value) {
                this._tunnel2RekeyFuzzPercentage = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2RekeyFuzzPercentage = function () {
            this._tunnel2RekeyFuzzPercentage = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyFuzzPercentageInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2RekeyFuzzPercentage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyMarginTimeSeconds", {
            get: function () {
                return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
            },
            set: function (value) {
                this._tunnel2RekeyMarginTimeSeconds = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2RekeyMarginTimeSeconds = function () {
            this._tunnel2RekeyMarginTimeSeconds = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyMarginTimeSecondsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2RekeyMarginTimeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2ReplayWindowSize", {
            get: function () {
                return this.getNumberAttribute('tunnel2_replay_window_size');
            },
            set: function (value) {
                this._tunnel2ReplayWindowSize = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2ReplayWindowSize = function () {
            this._tunnel2ReplayWindowSize = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2ReplayWindowSizeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2ReplayWindowSize;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2StartupAction", {
            get: function () {
                return this.getStringAttribute('tunnel2_startup_action');
            },
            set: function (value) {
                this._tunnel2StartupAction = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnel2StartupAction = function () {
            this._tunnel2StartupAction = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnel2StartupActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnel2StartupAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnel2VgwInsideAddress", {
            // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('tunnel2_vgw_inside_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "tunnelInsideIpVersion", {
            get: function () {
                return this.getStringAttribute('tunnel_inside_ip_version');
            },
            set: function (value) {
                this._tunnelInsideIpVersion = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetTunnelInsideIpVersion = function () {
            this._tunnelInsideIpVersion = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "tunnelInsideIpVersionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tunnelInsideIpVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnection.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        // vgw_telemetry - computed: true, optional: false, required: false
        VpnConnection.prototype.vgwTelemetry = function (index) {
            return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
        };
        Object.defineProperty(VpnConnection.prototype, "vpnGatewayId", {
            get: function () {
                return this.getStringAttribute('vpn_gateway_id');
            },
            set: function (value) {
                this._vpnGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnConnection.prototype.resetVpnGatewayId = function () {
            this._vpnGatewayId = undefined;
        };
        Object.defineProperty(VpnConnection.prototype, "vpnGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpnGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpnConnection.prototype.synthesizeAttributes = function () {
            return {
                customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
                enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
                local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
                local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
                remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
                remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
                static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
                tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
                tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
                tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
                tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
                tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
                tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
                tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
                tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
                tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
                tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
                tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
                tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
                tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
                tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
                tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
                tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
                tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
                tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
                tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
                tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
                tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
                tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
                tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
                tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
                tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
                tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
                tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
                tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
                tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
                tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
                tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
                tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
                tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
                tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
                tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
                tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
                tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
                type: cdktf.stringToTerraform(this._type),
                vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpnConnection.tfResourceType = "aws_vpn_connection";
        return VpnConnection;
    }(cdktf.TerraformResource));
    VPC.VpnConnection = VpnConnection;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route}
    */
    var VpnConnectionRoute = /** @class */ (function (_super) {
        __extends(VpnConnectionRoute, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpnConnectionRouteConfig
        */
        function VpnConnectionRoute(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_connection_route',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._destinationCidrBlock = config.destinationCidrBlock;
            _this._vpnConnectionId = config.vpnConnectionId;
            return _this;
        }
        Object.defineProperty(VpnConnectionRoute.prototype, "destinationCidrBlock", {
            get: function () {
                return this.getStringAttribute('destination_cidr_block');
            },
            set: function (value) {
                this._destinationCidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoute.prototype, "destinationCidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationCidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoute.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoute.prototype, "vpnConnectionId", {
            get: function () {
                return this.getStringAttribute('vpn_connection_id');
            },
            set: function (value) {
                this._vpnConnectionId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnConnectionRoute.prototype, "vpnConnectionIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpnConnectionId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpnConnectionRoute.prototype.synthesizeAttributes = function () {
            return {
                destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
                vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpnConnectionRoute.tfResourceType = "aws_vpn_connection_route";
        return VpnConnectionRoute;
    }(cdktf.TerraformResource));
    VPC.VpnConnectionRoute = VpnConnectionRoute;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway}
    */
    var VpnGateway = /** @class */ (function (_super) {
        __extends(VpnGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpnGatewayConfig = {}
        */
        function VpnGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._amazonSideAsn = config.amazonSideAsn;
            _this._availabilityZone = config.availabilityZone;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._vpcId = config.vpcId;
            return _this;
        }
        Object.defineProperty(VpnGateway.prototype, "amazonSideAsn", {
            get: function () {
                return this.getStringAttribute('amazon_side_asn');
            },
            set: function (value) {
                this._amazonSideAsn = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGateway.prototype.resetAmazonSideAsn = function () {
            this._amazonSideAsn = undefined;
        };
        Object.defineProperty(VpnGateway.prototype, "amazonSideAsnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._amazonSideAsn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGateway.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(VpnGateway.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(VpnGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGateway.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(VpnGateway.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGateway.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGateway.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(VpnGateway.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpnGateway.prototype.synthesizeAttributes = function () {
            return {
                amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                vpc_id: cdktf.stringToTerraform(this._vpcId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpnGateway.tfResourceType = "aws_vpn_gateway";
        return VpnGateway;
    }(cdktf.TerraformResource));
    VPC.VpnGateway = VpnGateway;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment}
    */
    var VpnGatewayAttachment = /** @class */ (function (_super) {
        __extends(VpnGatewayAttachment, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpnGatewayAttachmentConfig
        */
        function VpnGatewayAttachment(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_gateway_attachment',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._vpcId = config.vpcId;
            _this._vpnGatewayId = config.vpnGatewayId;
            return _this;
        }
        Object.defineProperty(VpnGatewayAttachment.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayAttachment.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayAttachment.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayAttachment.prototype, "vpnGatewayId", {
            get: function () {
                return this.getStringAttribute('vpn_gateway_id');
            },
            set: function (value) {
                this._vpnGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayAttachment.prototype, "vpnGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpnGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpnGatewayAttachment.prototype.synthesizeAttributes = function () {
            return {
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpnGatewayAttachment.tfResourceType = "aws_vpn_gateway_attachment";
        return VpnGatewayAttachment;
    }(cdktf.TerraformResource));
    VPC.VpnGatewayAttachment = VpnGatewayAttachment;
    function vpnGatewayRoutePropagationTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"])
        };
    }
    var VpnGatewayRoutePropagationTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(VpnGatewayRoutePropagationTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function VpnGatewayRoutePropagationTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(VpnGatewayRoutePropagationTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGatewayRoutePropagationTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(VpnGatewayRoutePropagationTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagationTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        VpnGatewayRoutePropagationTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(VpnGatewayRoutePropagationTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        return VpnGatewayRoutePropagationTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    VPC.VpnGatewayRoutePropagationTimeoutsOutputReference = VpnGatewayRoutePropagationTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation}
    */
    var VpnGatewayRoutePropagation = /** @class */ (function (_super) {
        __extends(VpnGatewayRoutePropagation, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options VpnGatewayRoutePropagationConfig
        */
        function VpnGatewayRoutePropagation(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_gateway_route_propagation',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new VpnGatewayRoutePropagationTimeoutsOutputReference(_this, "timeouts", true);
            _this._routeTableId = config.routeTableId;
            _this._vpnGatewayId = config.vpnGatewayId;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "vpnGatewayId", {
            get: function () {
                return this.getStringAttribute('vpn_gateway_id');
            },
            set: function (value) {
                this._vpnGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "vpnGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpnGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        VpnGatewayRoutePropagation.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        VpnGatewayRoutePropagation.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(VpnGatewayRoutePropagation.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        VpnGatewayRoutePropagation.prototype.synthesizeAttributes = function () {
            return {
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
                timeouts: vpnGatewayRoutePropagationTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        VpnGatewayRoutePropagation.tfResourceType = "aws_vpn_gateway_route_propagation";
        return VpnGatewayRoutePropagation;
    }(cdktf.TerraformResource));
    VPC.VpnGatewayRoutePropagation = VpnGatewayRoutePropagation;
    function dataAwsCustomerGatewayFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway}
    */
    var DataAwsCustomerGateway = /** @class */ (function (_super) {
        __extends(DataAwsCustomerGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsCustomerGatewayConfig = {}
        */
        function DataAwsCustomerGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_customer_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsCustomerGateway.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "bgpAsn", {
            // bgp_asn - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('bgp_asn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "deviceName", {
            // device_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('device_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "ipAddress", {
            // ip_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ip_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsCustomerGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsCustomerGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCustomerGateway.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsCustomerGateway.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsCustomerGateway.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsCustomerGateway.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsCustomerGatewayFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsCustomerGateway.tfResourceType = "aws_customer_gateway";
        return DataAwsCustomerGateway;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsCustomerGateway = DataAwsCustomerGateway;
    var DataAwsInternetGatewayAttachments = /** @class */ (function (_super) {
        __extends(DataAwsInternetGatewayAttachments, _super);
        function DataAwsInternetGatewayAttachments() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsInternetGatewayAttachments.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsInternetGatewayAttachments.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsInternetGatewayAttachments;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsInternetGatewayAttachments = DataAwsInternetGatewayAttachments;
    function dataAwsInternetGatewayFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway}
    */
    var DataAwsInternetGateway = /** @class */ (function (_super) {
        __extends(DataAwsInternetGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsInternetGatewayConfig = {}
        */
        function DataAwsInternetGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_internet_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._internetGatewayId = config.internetGatewayId;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsInternetGateway.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        // attachments - computed: true, optional: false, required: false
        DataAwsInternetGateway.prototype.attachments = function (index) {
            return new DataAwsInternetGatewayAttachments(this, 'attachments', index);
        };
        Object.defineProperty(DataAwsInternetGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsInternetGateway.prototype, "internetGatewayId", {
            get: function () {
                return this.getStringAttribute('internet_gateway_id');
            },
            set: function (value) {
                this._internetGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsInternetGateway.prototype.resetInternetGatewayId = function () {
            this._internetGatewayId = undefined;
        };
        Object.defineProperty(DataAwsInternetGateway.prototype, "internetGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._internetGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsInternetGateway.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsInternetGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsInternetGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsInternetGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsInternetGateway.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsInternetGateway.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsInternetGateway.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsInternetGateway.prototype.synthesizeAttributes = function () {
            return {
                internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsInternetGatewayFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsInternetGateway.tfResourceType = "aws_internet_gateway";
        return DataAwsInternetGateway;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsInternetGateway = DataAwsInternetGateway;
    function dataAwsNatGatewayFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway}
    */
    var DataAwsNatGateway = /** @class */ (function (_super) {
        __extends(DataAwsNatGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsNatGatewayConfig = {}
        */
        function DataAwsNatGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_nat_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._state = config.state;
            _this._subnetId = config.subnetId;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsNatGateway.prototype, "allocationId", {
            // ==========
            // ATTRIBUTES
            // ==========
            // allocation_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('allocation_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "connectivityType", {
            // connectivity_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('connectivity_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "networkInterfaceId", {
            // network_interface_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "privateIp", {
            // private_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "publicIp", {
            // public_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('public_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "state", {
            get: function () {
                return this.getStringAttribute('state');
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNatGateway.prototype.resetState = function () {
            this._state = undefined;
        };
        Object.defineProperty(DataAwsNatGateway.prototype, "stateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNatGateway.prototype.resetSubnetId = function () {
            this._subnetId = undefined;
        };
        Object.defineProperty(DataAwsNatGateway.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNatGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsNatGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNatGateway.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsNatGateway.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNatGateway.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNatGateway.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsNatGateway.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsNatGateway.prototype.synthesizeAttributes = function () {
            return {
                state: cdktf.stringToTerraform(this._state),
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsNatGatewayFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsNatGateway.tfResourceType = "aws_nat_gateway";
        return DataAwsNatGateway;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsNatGateway = DataAwsNatGateway;
    function dataAwsNetworkAclsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls}
    */
    var DataAwsNetworkAcls = /** @class */ (function (_super) {
        __extends(DataAwsNetworkAcls, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsNetworkAclsConfig = {}
        */
        function DataAwsNetworkAcls(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_acls',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsNetworkAcls.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkAcls.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkAcls.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkAcls.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsNetworkAcls.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkAcls.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkAcls.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsNetworkAcls.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkAcls.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkAcls.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsNetworkAcls.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsNetworkAcls.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsNetworkAclsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsNetworkAcls.tfResourceType = "aws_network_acls";
        return DataAwsNetworkAcls;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsNetworkAcls = DataAwsNetworkAcls;
    var DataAwsNetworkInterfaceAssociation = /** @class */ (function (_super) {
        __extends(DataAwsNetworkInterfaceAssociation, _super);
        function DataAwsNetworkInterfaceAssociation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "allocationId", {
            // allocation_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('allocation_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "associationId", {
            // association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "carrierIp", {
            // carrier_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('carrier_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "customerOwnedIp", {
            // customer_owned_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('customer_owned_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "ipOwnerId", {
            // ip_owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ip_owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "publicDnsName", {
            // public_dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('public_dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "publicIp", {
            // public_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('public_ip');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsNetworkInterfaceAssociation;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsNetworkInterfaceAssociation = DataAwsNetworkInterfaceAssociation;
    var DataAwsNetworkInterfaceAttachment = /** @class */ (function (_super) {
        __extends(DataAwsNetworkInterfaceAttachment, _super);
        function DataAwsNetworkInterfaceAttachment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "attachmentId", {
            // attachment_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('attachment_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "deviceIndex", {
            // device_index - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('device_index');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "instanceId", {
            // instance_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "instanceOwnerId", {
            // instance_owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_owner_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsNetworkInterfaceAttachment;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsNetworkInterfaceAttachment = DataAwsNetworkInterfaceAttachment;
    function dataAwsNetworkInterfaceFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface}
    */
    var DataAwsNetworkInterface = /** @class */ (function (_super) {
        __extends(DataAwsNetworkInterface, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsNetworkInterfaceConfig = {}
        */
        function DataAwsNetworkInterface(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_interface',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsNetworkInterface.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        // association - computed: true, optional: false, required: false
        DataAwsNetworkInterface.prototype.association = function (index) {
            return new DataAwsNetworkInterfaceAssociation(this, 'association', index);
        };
        // attachment - computed: true, optional: false, required: false
        DataAwsNetworkInterface.prototype.attachment = function (index) {
            return new DataAwsNetworkInterfaceAttachment(this, 'attachment', index);
        };
        Object.defineProperty(DataAwsNetworkInterface.prototype, "availabilityZone", {
            // availability_zone - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "description", {
            // description - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('description');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "interfaceType", {
            // interface_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('interface_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "ipv6Addresses", {
            // ipv6_addresses - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ipv6_addresses');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "macAddress", {
            // mac_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('mac_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "outpostArn", {
            // outpost_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outpost_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "privateDnsName", {
            // private_dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "privateIp", {
            // private_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "privateIps", {
            // private_ips - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('private_ips');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "requesterId", {
            // requester_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('requester_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "securityGroups", {
            // security_groups - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('security_groups');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "subnetId", {
            // subnet_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkInterface.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsNetworkInterface.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterface.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkInterface.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsNetworkInterface.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsNetworkInterface.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsNetworkInterfaceFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsNetworkInterface.tfResourceType = "aws_network_interface";
        return DataAwsNetworkInterface;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsNetworkInterface = DataAwsNetworkInterface;
    function dataAwsNetworkInterfacesFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces}
    */
    var DataAwsNetworkInterfaces = /** @class */ (function (_super) {
        __extends(DataAwsNetworkInterfaces, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsNetworkInterfacesConfig = {}
        */
        function DataAwsNetworkInterfaces(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_network_interfaces',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkInterfaces.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsNetworkInterfaces.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsNetworkInterfaces.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsNetworkInterfaces.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsNetworkInterfacesFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsNetworkInterfaces.tfResourceType = "aws_network_interfaces";
        return DataAwsNetworkInterfaces;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsNetworkInterfaces = DataAwsNetworkInterfaces;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route}
    */
    var DataAwsRoute = /** @class */ (function (_super) {
        __extends(DataAwsRoute, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsRouteConfig
        */
        function DataAwsRoute(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._carrierGatewayId = config.carrierGatewayId;
            _this._destinationCidrBlock = config.destinationCidrBlock;
            _this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
            _this._destinationPrefixListId = config.destinationPrefixListId;
            _this._egressOnlyGatewayId = config.egressOnlyGatewayId;
            _this._gatewayId = config.gatewayId;
            _this._instanceId = config.instanceId;
            _this._localGatewayId = config.localGatewayId;
            _this._natGatewayId = config.natGatewayId;
            _this._networkInterfaceId = config.networkInterfaceId;
            _this._routeTableId = config.routeTableId;
            _this._transitGatewayId = config.transitGatewayId;
            _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
            return _this;
        }
        Object.defineProperty(DataAwsRoute.prototype, "carrierGatewayId", {
            get: function () {
                return this.getStringAttribute('carrier_gateway_id');
            },
            set: function (value) {
                this._carrierGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetCarrierGatewayId = function () {
            this._carrierGatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "carrierGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._carrierGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "destinationCidrBlock", {
            get: function () {
                return this.getStringAttribute('destination_cidr_block');
            },
            set: function (value) {
                this._destinationCidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetDestinationCidrBlock = function () {
            this._destinationCidrBlock = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "destinationCidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationCidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "destinationIpv6CidrBlock", {
            get: function () {
                return this.getStringAttribute('destination_ipv6_cidr_block');
            },
            set: function (value) {
                this._destinationIpv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetDestinationIpv6CidrBlock = function () {
            this._destinationIpv6CidrBlock = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "destinationIpv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationIpv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "destinationPrefixListId", {
            get: function () {
                return this.getStringAttribute('destination_prefix_list_id');
            },
            set: function (value) {
                this._destinationPrefixListId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetDestinationPrefixListId = function () {
            this._destinationPrefixListId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "destinationPrefixListIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._destinationPrefixListId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "egressOnlyGatewayId", {
            get: function () {
                return this.getStringAttribute('egress_only_gateway_id');
            },
            set: function (value) {
                this._egressOnlyGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetEgressOnlyGatewayId = function () {
            this._egressOnlyGatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "egressOnlyGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._egressOnlyGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "gatewayId", {
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            set: function (value) {
                this._gatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetGatewayId = function () {
            this._gatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "gatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._gatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "instanceId", {
            get: function () {
                return this.getStringAttribute('instance_id');
            },
            set: function (value) {
                this._instanceId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetInstanceId = function () {
            this._instanceId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "instanceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instanceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "localGatewayId", {
            get: function () {
                return this.getStringAttribute('local_gateway_id');
            },
            set: function (value) {
                this._localGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetLocalGatewayId = function () {
            this._localGatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "localGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._localGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "natGatewayId", {
            get: function () {
                return this.getStringAttribute('nat_gateway_id');
            },
            set: function (value) {
                this._natGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetNatGatewayId = function () {
            this._natGatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "natGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._natGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "networkInterfaceId", {
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            set: function (value) {
                this._networkInterfaceId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetNetworkInterfaceId = function () {
            this._networkInterfaceId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "networkInterfaceIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._networkInterfaceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "transitGatewayId", {
            get: function () {
                return this.getStringAttribute('transit_gateway_id');
            },
            set: function (value) {
                this._transitGatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetTransitGatewayId = function () {
            this._transitGatewayId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "transitGatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._transitGatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRoute.prototype, "vpcPeeringConnectionId", {
            get: function () {
                return this.getStringAttribute('vpc_peering_connection_id');
            },
            set: function (value) {
                this._vpcPeeringConnectionId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRoute.prototype.resetVpcPeeringConnectionId = function () {
            this._vpcPeeringConnectionId = undefined;
        };
        Object.defineProperty(DataAwsRoute.prototype, "vpcPeeringConnectionIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcPeeringConnectionId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsRoute.prototype.synthesizeAttributes = function () {
            return {
                carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
                destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
                destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
                destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
                egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
                gateway_id: cdktf.stringToTerraform(this._gatewayId),
                instance_id: cdktf.stringToTerraform(this._instanceId),
                local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
                nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
                network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
                vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsRoute.tfResourceType = "aws_route";
        return DataAwsRoute;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsRoute = DataAwsRoute;
    var DataAwsRouteTableAssociations = /** @class */ (function (_super) {
        __extends(DataAwsRouteTableAssociations, _super);
        function DataAwsRouteTableAssociations() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsRouteTableAssociations.prototype, "gatewayId", {
            // gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableAssociations.prototype, "main", {
            // main - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('main');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableAssociations.prototype, "routeTableAssociationId", {
            // route_table_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('route_table_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableAssociations.prototype, "routeTableId", {
            // route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableAssociations.prototype, "subnetId", {
            // subnet_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsRouteTableAssociations;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsRouteTableAssociations = DataAwsRouteTableAssociations;
    var DataAwsRouteTableRoutes = /** @class */ (function (_super) {
        __extends(DataAwsRouteTableRoutes, _super);
        function DataAwsRouteTableRoutes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "carrierGatewayId", {
            // carrier_gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('carrier_gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "destinationPrefixListId", {
            // destination_prefix_list_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('destination_prefix_list_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "egressOnlyGatewayId", {
            // egress_only_gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('egress_only_gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "gatewayId", {
            // gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "instanceId", {
            // instance_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "ipv6CidrBlock", {
            // ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "localGatewayId", {
            // local_gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('local_gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "natGatewayId", {
            // nat_gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('nat_gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "networkInterfaceId", {
            // network_interface_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('network_interface_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "transitGatewayId", {
            // transit_gateway_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('transit_gateway_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "vpcEndpointId", {
            // vpc_endpoint_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_endpoint_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTableRoutes.prototype, "vpcPeeringConnectionId", {
            // vpc_peering_connection_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_peering_connection_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsRouteTableRoutes;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsRouteTableRoutes = DataAwsRouteTableRoutes;
    function dataAwsRouteTableFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table}
    */
    var DataAwsRouteTable = /** @class */ (function (_super) {
        __extends(DataAwsRouteTable, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsRouteTableConfig = {}
        */
        function DataAwsRouteTable(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route_table',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._gatewayId = config.gatewayId;
            _this._routeTableId = config.routeTableId;
            _this._subnetId = config.subnetId;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsRouteTable.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        // associations - computed: true, optional: false, required: false
        DataAwsRouteTable.prototype.associations = function (index) {
            return new DataAwsRouteTableAssociations(this, 'associations', index);
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "gatewayId", {
            get: function () {
                return this.getStringAttribute('gateway_id');
            },
            set: function (value) {
                this._gatewayId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetGatewayId = function () {
            this._gatewayId = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "gatewayIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._gatewayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "routeTableId", {
            get: function () {
                return this.getStringAttribute('route_table_id');
            },
            set: function (value) {
                this._routeTableId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetRouteTableId = function () {
            this._routeTableId = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "routeTableIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._routeTableId;
            },
            enumerable: false,
            configurable: true
        });
        // routes - computed: true, optional: false, required: false
        DataAwsRouteTable.prototype.routes = function (index) {
            return new DataAwsRouteTableRoutes(this, 'routes', index);
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "subnetId", {
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            set: function (value) {
                this._subnetId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetSubnetId = function () {
            this._subnetId = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "subnetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTable.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTable.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsRouteTable.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsRouteTable.prototype.synthesizeAttributes = function () {
            return {
                gateway_id: cdktf.stringToTerraform(this._gatewayId),
                route_table_id: cdktf.stringToTerraform(this._routeTableId),
                subnet_id: cdktf.stringToTerraform(this._subnetId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsRouteTableFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsRouteTable.tfResourceType = "aws_route_table";
        return DataAwsRouteTable;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsRouteTable = DataAwsRouteTable;
    function dataAwsRouteTablesFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables}
    */
    var DataAwsRouteTables = /** @class */ (function (_super) {
        __extends(DataAwsRouteTables, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsRouteTablesConfig = {}
        */
        function DataAwsRouteTables(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_route_tables',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsRouteTables.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTables.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTables.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTables.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsRouteTables.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTables.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTables.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsRouteTables.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsRouteTables.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsRouteTables.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsRouteTables.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsRouteTables.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsRouteTablesFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsRouteTables.tfResourceType = "aws_route_tables";
        return DataAwsRouteTables;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsRouteTables = DataAwsRouteTables;
    function dataAwsSecurityGroupFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group}
    */
    var DataAwsSecurityGroup = /** @class */ (function (_super) {
        __extends(DataAwsSecurityGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsSecurityGroupConfig = {}
        */
        function DataAwsSecurityGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_security_group',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._name = config.name;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsSecurityGroup.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "description", {
            // description - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('description');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroup.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroup.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroup.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroup.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroup.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsSecurityGroup.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsSecurityGroupFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsSecurityGroup.tfResourceType = "aws_security_group";
        return DataAwsSecurityGroup;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsSecurityGroup = DataAwsSecurityGroup;
    function dataAwsSecurityGroupsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups}
    */
    var DataAwsSecurityGroups = /** @class */ (function (_super) {
        __extends(DataAwsSecurityGroups, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsSecurityGroupsConfig = {}
        */
        function DataAwsSecurityGroups(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_security_groups',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsSecurityGroups.prototype, "arns", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arns - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('arns');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroups.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroups.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroups.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroups.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroups.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroups.prototype, "vpcIds", {
            // vpc_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('vpc_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSecurityGroups.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSecurityGroups.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsSecurityGroups.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsSecurityGroups.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsSecurityGroupsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsSecurityGroups.tfResourceType = "aws_security_groups";
        return DataAwsSecurityGroups;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsSecurityGroups = DataAwsSecurityGroups;
    function dataAwsSubnetFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet}
    */
    var DataAwsSubnet = /** @class */ (function (_super) {
        __extends(DataAwsSubnet, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsSubnetConfig = {}
        */
        function DataAwsSubnet(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_subnet',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._availabilityZone = config.availabilityZone;
            _this._availabilityZoneId = config.availabilityZoneId;
            _this._cidrBlock = config.cidrBlock;
            _this._defaultForAz = config.defaultForAz;
            _this._ipv6CidrBlock = config.ipv6CidrBlock;
            _this._state = config.state;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsSubnet.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "assignIpv6AddressOnCreation", {
            // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('assign_ipv6_address_on_creation');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneId", {
            get: function () {
                return this.getStringAttribute('availability_zone_id');
            },
            set: function (value) {
                this._availabilityZoneId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetAvailabilityZoneId = function () {
            this._availabilityZoneId = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZoneId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "availableIpAddressCount", {
            // available_ip_address_count - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('available_ip_address_count');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetCidrBlock = function () {
            this._cidrBlock = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "customerOwnedIpv4Pool", {
            // customer_owned_ipv4_pool - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "defaultForAz", {
            get: function () {
                return this.getBooleanAttribute('default_for_az');
            },
            set: function (value) {
                this._defaultForAz = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetDefaultForAz = function () {
            this._defaultForAz = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "defaultForAzInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._defaultForAz;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlock", {
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            set: function (value) {
                this._ipv6CidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetIpv6CidrBlock = function () {
            this._ipv6CidrBlock = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipv6CidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlockAssociationId", {
            // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "mapCustomerOwnedIpOnLaunch", {
            // map_customer_owned_ip_on_launch - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "mapPublicIpOnLaunch", {
            // map_public_ip_on_launch - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('map_public_ip_on_launch');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "outpostArn", {
            // outpost_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outpost_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "state", {
            get: function () {
                return this.getStringAttribute('state');
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetState = function () {
            this._state = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "stateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnet.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnet.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsSubnet.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsSubnet.prototype.synthesizeAttributes = function () {
            return {
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                default_for_az: cdktf.booleanToTerraform(this._defaultForAz),
                ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
                state: cdktf.stringToTerraform(this._state),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsSubnetFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsSubnet.tfResourceType = "aws_subnet";
        return DataAwsSubnet;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsSubnet = DataAwsSubnet;
    function dataAwsSubnetIdsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids}
    */
    var DataAwsSubnetIds = /** @class */ (function (_super) {
        __extends(DataAwsSubnetIds, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsSubnetIdsConfig
        */
        function DataAwsSubnetIds(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_subnet_ids',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsSubnetIds.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnetIds.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnetIds.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnetIds.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsSubnetIds.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnetIds.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnetIds.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnetIds.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnetIds.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsSubnetIds.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsSubnetIds.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsSubnetIdsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsSubnetIds.tfResourceType = "aws_subnet_ids";
        return DataAwsSubnetIds;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsSubnetIds = DataAwsSubnetIds;
    function dataAwsSubnetsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets}
    */
    var DataAwsSubnets = /** @class */ (function (_super) {
        __extends(DataAwsSubnets, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsSubnetsConfig = {}
        */
        function DataAwsSubnets(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_subnets',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsSubnets.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnets.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnets.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnets.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsSubnets.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsSubnets.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsSubnets.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsSubnets.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsSubnets.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsSubnetsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsSubnets.tfResourceType = "aws_subnets";
        return DataAwsSubnets;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsSubnets = DataAwsSubnets;
    var DataAwsVpcCidrBlockAssociations = /** @class */ (function (_super) {
        __extends(DataAwsVpcCidrBlockAssociations, _super);
        function DataAwsVpcCidrBlockAssociations() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "associationId", {
            // association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "state", {
            // state - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('state');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsVpcCidrBlockAssociations;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsVpcCidrBlockAssociations = DataAwsVpcCidrBlockAssociations;
    function dataAwsVpcFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc}
    */
    var DataAwsVpc = /** @class */ (function (_super) {
        __extends(DataAwsVpc, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcConfig = {}
        */
        function DataAwsVpc(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cidrBlock = config.cidrBlock;
            _this._default = config["default"];
            _this._dhcpOptionsId = config.dhcpOptionsId;
            _this._state = config.state;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpc.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetCidrBlock = function () {
            this._cidrBlock = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        // cidr_block_associations - computed: true, optional: false, required: false
        DataAwsVpc.prototype.cidrBlockAssociations = function (index) {
            return new DataAwsVpcCidrBlockAssociations(this, 'cidr_block_associations', index);
        };
        Object.defineProperty(DataAwsVpc.prototype, "default", {
            get: function () {
                return this.getBooleanAttribute('default');
            },
            set: function (value) {
                this._default = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetDefault = function () {
            this._default = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "defaultInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._default;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "dhcpOptionsId", {
            get: function () {
                return this.getStringAttribute('dhcp_options_id');
            },
            set: function (value) {
                this._dhcpOptionsId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetDhcpOptionsId = function () {
            this._dhcpOptionsId = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "dhcpOptionsIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._dhcpOptionsId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "enableDnsHostnames", {
            // enable_dns_hostnames - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_dns_hostnames');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "enableDnsSupport", {
            // enable_dns_support - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_dns_support');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "instanceTenancy", {
            // instance_tenancy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('instance_tenancy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "ipv6AssociationId", {
            // ipv6_association_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_association_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "ipv6CidrBlock", {
            // ipv6_cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "mainRouteTableId", {
            // main_route_table_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('main_route_table_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "state", {
            get: function () {
                return this.getStringAttribute('state');
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetState = function () {
            this._state = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "stateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpc.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpc.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpc.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpc.prototype.synthesizeAttributes = function () {
            return {
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                "default": cdktf.booleanToTerraform(this._default),
                dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
                state: cdktf.stringToTerraform(this._state),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpcFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpc.tfResourceType = "aws_vpc";
        return DataAwsVpc;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpc = DataAwsVpc;
    function dataAwsVpcDhcpOptionsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options}
    */
    var DataAwsVpcDhcpOptions = /** @class */ (function (_super) {
        __extends(DataAwsVpcDhcpOptions, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcDhcpOptionsConfig = {}
        */
        function DataAwsVpcDhcpOptions(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_dhcp_options',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._dhcpOptionsId = config.dhcpOptionsId;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "dhcpOptionsId", {
            get: function () {
                return this.getStringAttribute('dhcp_options_id');
            },
            set: function (value) {
                this._dhcpOptionsId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcDhcpOptions.prototype.resetDhcpOptionsId = function () {
            this._dhcpOptionsId = undefined;
        };
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "dhcpOptionsIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._dhcpOptionsId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "domainName", {
            // domain_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('domain_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "domainNameServers", {
            // domain_name_servers - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('domain_name_servers');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "netbiosNameServers", {
            // netbios_name_servers - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('netbios_name_servers');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "netbiosNodeType", {
            // netbios_node_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('netbios_node_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "ntpServers", {
            // ntp_servers - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ntp_servers');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcDhcpOptions.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcDhcpOptions.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcDhcpOptions.prototype.synthesizeAttributes = function () {
            return {
                dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpcDhcpOptionsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcDhcpOptions.tfResourceType = "aws_vpc_dhcp_options";
        return DataAwsVpcDhcpOptions;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcDhcpOptions = DataAwsVpcDhcpOptions;
    var DataAwsVpcEndpointDnsEntry = /** @class */ (function (_super) {
        __extends(DataAwsVpcEndpointDnsEntry, _super);
        function DataAwsVpcEndpointDnsEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsVpcEndpointDnsEntry.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointDnsEntry.prototype, "hostedZoneId", {
            // hosted_zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('hosted_zone_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsVpcEndpointDnsEntry;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsVpcEndpointDnsEntry = DataAwsVpcEndpointDnsEntry;
    function dataAwsVpcEndpointFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
    */
    var DataAwsVpcEndpoint = /** @class */ (function (_super) {
        __extends(DataAwsVpcEndpoint, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcEndpointConfig = {}
        */
        function DataAwsVpcEndpoint(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._serviceName = config.serviceName;
            _this._state = config.state;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "cidrBlocks", {
            // cidr_blocks - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('cidr_blocks');
            },
            enumerable: false,
            configurable: true
        });
        // dns_entry - computed: true, optional: false, required: false
        DataAwsVpcEndpoint.prototype.dnsEntry = function (index) {
            return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "networkInterfaceIds", {
            // network_interface_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('network_interface_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "ownerId", {
            // owner_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "policy", {
            // policy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('policy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "prefixListId", {
            // prefix_list_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('prefix_list_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "privateDnsEnabled", {
            // private_dns_enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('private_dns_enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "requesterManaged", {
            // requester_managed - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('requester_managed');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "routeTableIds", {
            // route_table_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('route_table_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "securityGroupIds", {
            // security_group_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('security_group_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "serviceName", {
            get: function () {
                return this.getStringAttribute('service_name');
            },
            set: function (value) {
                this._serviceName = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpoint.prototype.resetServiceName = function () {
            this._serviceName = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "serviceNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._serviceName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "state", {
            get: function () {
                return this.getStringAttribute('state');
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpoint.prototype.resetState = function () {
            this._state = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "stateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "subnetIds", {
            // subnet_ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('subnet_ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpoint.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcEndpointType", {
            // vpc_endpoint_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_endpoint_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpoint.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpoint.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpoint.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcEndpoint.prototype.synthesizeAttributes = function () {
            return {
                service_name: cdktf.stringToTerraform(this._serviceName),
                state: cdktf.stringToTerraform(this._state),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsVpcEndpointFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcEndpoint.tfResourceType = "aws_vpc_endpoint";
        return DataAwsVpcEndpoint;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcEndpoint = DataAwsVpcEndpoint;
    function dataAwsVpcEndpointServiceFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service}
    */
    var DataAwsVpcEndpointService = /** @class */ (function (_super) {
        __extends(DataAwsVpcEndpointService, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcEndpointServiceConfig = {}
        */
        function DataAwsVpcEndpointService(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_endpoint_service',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._service = config.service;
            _this._serviceName = config.serviceName;
            _this._serviceType = config.serviceType;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "acceptanceRequired", {
            // ==========
            // ATTRIBUTES
            // ==========
            // acceptance_required - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('acceptance_required');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "availabilityZones", {
            // availability_zones - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('availability_zones');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "baseEndpointDnsNames", {
            // base_endpoint_dns_names - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('base_endpoint_dns_names');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "managesVpcEndpoints", {
            // manages_vpc_endpoints - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('manages_vpc_endpoints');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "owner", {
            // owner - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('owner');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "privateDnsName", {
            // private_dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "service", {
            get: function () {
                return this.getStringAttribute('service');
            },
            set: function (value) {
                this._service = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpointService.prototype.resetService = function () {
            this._service = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._service;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceId", {
            // service_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('service_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceName", {
            get: function () {
                return this.getStringAttribute('service_name');
            },
            set: function (value) {
                this._serviceName = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpointService.prototype.resetServiceName = function () {
            this._serviceName = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._serviceName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceType", {
            get: function () {
                return this.getStringAttribute('service_type');
            },
            set: function (value) {
                this._serviceType = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpointService.prototype.resetServiceType = function () {
            this._serviceType = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._serviceType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpointService.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "vpcEndpointPolicySupported", {
            // vpc_endpoint_policy_supported - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('vpc_endpoint_policy_supported');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcEndpointService.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcEndpointService.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcEndpointService.prototype.synthesizeAttributes = function () {
            return {
                service: cdktf.stringToTerraform(this._service),
                service_name: cdktf.stringToTerraform(this._serviceName),
                service_type: cdktf.stringToTerraform(this._serviceType),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpcEndpointServiceFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcEndpointService.tfResourceType = "aws_vpc_endpoint_service";
        return DataAwsVpcEndpointService;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcEndpointService = DataAwsVpcEndpointService;
    var DataAwsVpcPeeringConnectionCidrBlockSet = /** @class */ (function (_super) {
        __extends(DataAwsVpcPeeringConnectionCidrBlockSet, _super);
        function DataAwsVpcPeeringConnectionCidrBlockSet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsVpcPeeringConnectionCidrBlockSet.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsVpcPeeringConnectionCidrBlockSet;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsVpcPeeringConnectionCidrBlockSet = DataAwsVpcPeeringConnectionCidrBlockSet;
    var DataAwsVpcPeeringConnectionPeerCidrBlockSet = /** @class */ (function (_super) {
        __extends(DataAwsVpcPeeringConnectionPeerCidrBlockSet, _super);
        function DataAwsVpcPeeringConnectionPeerCidrBlockSet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsVpcPeeringConnectionPeerCidrBlockSet.prototype, "cidrBlock", {
            // cidr_block - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsVpcPeeringConnectionPeerCidrBlockSet;
    }(cdktf.ComplexComputedList));
    VPC.DataAwsVpcPeeringConnectionPeerCidrBlockSet = DataAwsVpcPeeringConnectionPeerCidrBlockSet;
    function dataAwsVpcPeeringConnectionFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}
    */
    var DataAwsVpcPeeringConnection = /** @class */ (function (_super) {
        __extends(DataAwsVpcPeeringConnection, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcPeeringConnectionConfig = {}
        */
        function DataAwsVpcPeeringConnection(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_peering_connection',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cidrBlock = config.cidrBlock;
            _this._ownerId = config.ownerId;
            _this._peerCidrBlock = config.peerCidrBlock;
            _this._peerOwnerId = config.peerOwnerId;
            _this._peerRegion = config.peerRegion;
            _this._peerVpcId = config.peerVpcId;
            _this._region = config.region;
            _this._status = config.status;
            _this._tags = config.tags;
            _this._vpcId = config.vpcId;
            _this._filter = config.filter;
            return _this;
        }
        // ==========
        // ATTRIBUTES
        // ==========
        // accepter - computed: true, optional: false, required: false
        DataAwsVpcPeeringConnection.prototype.accepter = function (key) {
            return new cdktf.BooleanMap(this, 'accepter').lookup(key);
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "cidrBlock", {
            get: function () {
                return this.getStringAttribute('cidr_block');
            },
            set: function (value) {
                this._cidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetCidrBlock = function () {
            this._cidrBlock = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "cidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        // cidr_block_set - computed: true, optional: false, required: false
        DataAwsVpcPeeringConnection.prototype.cidrBlockSet = function (index) {
            return new DataAwsVpcPeeringConnectionCidrBlockSet(this, 'cidr_block_set', index);
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "ownerId", {
            get: function () {
                return this.getStringAttribute('owner_id');
            },
            set: function (value) {
                this._ownerId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetOwnerId = function () {
            this._ownerId = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "ownerIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ownerId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerCidrBlock", {
            get: function () {
                return this.getStringAttribute('peer_cidr_block');
            },
            set: function (value) {
                this._peerCidrBlock = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetPeerCidrBlock = function () {
            this._peerCidrBlock = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerCidrBlockInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerCidrBlock;
            },
            enumerable: false,
            configurable: true
        });
        // peer_cidr_block_set - computed: true, optional: false, required: false
        DataAwsVpcPeeringConnection.prototype.peerCidrBlockSet = function (index) {
            return new DataAwsVpcPeeringConnectionPeerCidrBlockSet(this, 'peer_cidr_block_set', index);
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerOwnerId", {
            get: function () {
                return this.getStringAttribute('peer_owner_id');
            },
            set: function (value) {
                this._peerOwnerId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetPeerOwnerId = function () {
            this._peerOwnerId = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerOwnerIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerOwnerId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerRegion", {
            get: function () {
                return this.getStringAttribute('peer_region');
            },
            set: function (value) {
                this._peerRegion = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetPeerRegion = function () {
            this._peerRegion = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerRegionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerRegion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerVpcId", {
            get: function () {
                return this.getStringAttribute('peer_vpc_id');
            },
            set: function (value) {
                this._peerVpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetPeerVpcId = function () {
            this._peerVpcId = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerVpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._peerVpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "region", {
            get: function () {
                return this.getStringAttribute('region');
            },
            set: function (value) {
                this._region = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetRegion = function () {
            this._region = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "regionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._region;
            },
            enumerable: false,
            configurable: true
        });
        // requester - computed: true, optional: false, required: false
        DataAwsVpcPeeringConnection.prototype.requester = function (key) {
            return new cdktf.BooleanMap(this, 'requester').lookup(key);
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "status", {
            get: function () {
                return this.getStringAttribute('status');
            },
            set: function (value) {
                this._status = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetStatus = function () {
            this._status = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "statusInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnection.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcPeeringConnection.prototype.synthesizeAttributes = function () {
            return {
                cidr_block: cdktf.stringToTerraform(this._cidrBlock),
                owner_id: cdktf.stringToTerraform(this._ownerId),
                peer_cidr_block: cdktf.stringToTerraform(this._peerCidrBlock),
                peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
                peer_region: cdktf.stringToTerraform(this._peerRegion),
                peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
                region: cdktf.stringToTerraform(this._region),
                status: cdktf.stringToTerraform(this._status),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                filter: cdktf.listMapper(dataAwsVpcPeeringConnectionFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcPeeringConnection.tfResourceType = "aws_vpc_peering_connection";
        return DataAwsVpcPeeringConnection;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcPeeringConnection = DataAwsVpcPeeringConnection;
    function dataAwsVpcPeeringConnectionsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections}
    */
    var DataAwsVpcPeeringConnections = /** @class */ (function (_super) {
        __extends(DataAwsVpcPeeringConnections, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcPeeringConnectionsConfig = {}
        */
        function DataAwsVpcPeeringConnections(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpc_peering_connections',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnections.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcPeeringConnections.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcPeeringConnections.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcPeeringConnections.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpcPeeringConnectionsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcPeeringConnections.tfResourceType = "aws_vpc_peering_connections";
        return DataAwsVpcPeeringConnections;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcPeeringConnections = DataAwsVpcPeeringConnections;
    function dataAwsVpcsFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs}
    */
    var DataAwsVpcs = /** @class */ (function (_super) {
        __extends(DataAwsVpcs, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpcsConfig = {}
        */
        function DataAwsVpcs(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpcs',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpcs.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcs.prototype, "ids", {
            // ids - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('ids');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcs.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcs.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpcs.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpcs.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpcs.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpcs.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpcs.prototype.synthesizeAttributes = function () {
            return {
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpcsFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpcs.tfResourceType = "aws_vpcs";
        return DataAwsVpcs;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpcs = DataAwsVpcs;
    function dataAwsVpnGatewayFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway}
    */
    var DataAwsVpnGateway = /** @class */ (function (_super) {
        __extends(DataAwsVpnGateway, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsVpnGatewayConfig = {}
        */
        function DataAwsVpnGateway(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_vpn_gateway',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._amazonSideAsn = config.amazonSideAsn;
            _this._attachedVpcId = config.attachedVpcId;
            _this._availabilityZone = config.availabilityZone;
            _this._state = config.state;
            _this._tags = config.tags;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(DataAwsVpnGateway.prototype, "amazonSideAsn", {
            get: function () {
                return this.getStringAttribute('amazon_side_asn');
            },
            set: function (value) {
                this._amazonSideAsn = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetAmazonSideAsn = function () {
            this._amazonSideAsn = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "amazonSideAsnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._amazonSideAsn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "attachedVpcId", {
            get: function () {
                return this.getStringAttribute('attached_vpc_id');
            },
            set: function (value) {
                this._attachedVpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetAttachedVpcId = function () {
            this._attachedVpcId = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "attachedVpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._attachedVpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "state", {
            get: function () {
                return this.getStringAttribute('state');
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetState = function () {
            this._state = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "stateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsVpnGateway.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsVpnGateway.prototype.resetFilter = function () {
            this._filter = undefined;
        };
        Object.defineProperty(DataAwsVpnGateway.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsVpnGateway.prototype.synthesizeAttributes = function () {
            return {
                amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
                attached_vpc_id: cdktf.stringToTerraform(this._attachedVpcId),
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                state: cdktf.stringToTerraform(this._state),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                filter: cdktf.listMapper(dataAwsVpnGatewayFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsVpnGateway.tfResourceType = "aws_vpn_gateway";
        return DataAwsVpnGateway;
    }(cdktf.TerraformDataSource));
    VPC.DataAwsVpnGateway = DataAwsVpnGateway;
})(VPC = exports.VPC || (exports.VPC = {}));
