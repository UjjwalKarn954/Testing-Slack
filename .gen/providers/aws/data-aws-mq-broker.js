"use strict";
// https://www.terraform.io/docs/providers/aws/d/mq_broker.html
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
exports.DataAwsMqBroker = exports.DataAwsMqBrokerUser = exports.DataAwsMqBrokerMaintenanceWindowStartTime = exports.DataAwsMqBrokerLogs = exports.DataAwsMqBrokerLdapServerMetadata = exports.DataAwsMqBrokerInstances = exports.DataAwsMqBrokerEncryptionOptions = exports.DataAwsMqBrokerConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsMqBrokerConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerConfiguration, _super);
    function DataAwsMqBrokerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerConfiguration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerConfiguration.prototype, "revision", {
        // revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('revision');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerConfiguration = DataAwsMqBrokerConfiguration;
var DataAwsMqBrokerEncryptionOptions = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerEncryptionOptions, _super);
    function DataAwsMqBrokerEncryptionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerEncryptionOptions.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerEncryptionOptions.prototype, "useAwsOwnedKey", {
        // use_aws_owned_key - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_aws_owned_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerEncryptionOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerEncryptionOptions = DataAwsMqBrokerEncryptionOptions;
var DataAwsMqBrokerInstances = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerInstances, _super);
    function DataAwsMqBrokerInstances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerInstances.prototype, "consoleUrl", {
        // console_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('console_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerInstances.prototype, "endpoints", {
        // endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('endpoints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerInstances.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerInstances;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerInstances = DataAwsMqBrokerInstances;
var DataAwsMqBrokerLdapServerMetadata = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerLdapServerMetadata, _super);
    function DataAwsMqBrokerLdapServerMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "roleBase", {
        // role_base - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_base');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "roleName", {
        // role_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "roleSearchMatching", {
        // role_search_matching - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_search_matching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "roleSearchSubtree", {
        // role_search_subtree - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('role_search_subtree');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "serviceAccountPassword", {
        // service_account_password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_account_password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "serviceAccountUsername", {
        // service_account_username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_account_username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "userBase", {
        // user_base - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_base');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "userRoleName", {
        // user_role_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_role_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "userSearchMatching", {
        // user_search_matching - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_search_matching');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLdapServerMetadata.prototype, "userSearchSubtree", {
        // user_search_subtree - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('user_search_subtree');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerLdapServerMetadata;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerLdapServerMetadata = DataAwsMqBrokerLdapServerMetadata;
var DataAwsMqBrokerLogs = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerLogs, _super);
    function DataAwsMqBrokerLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerLogs.prototype, "audit", {
        // audit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('audit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerLogs.prototype, "general", {
        // general - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('general');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerLogs;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerLogs = DataAwsMqBrokerLogs;
var DataAwsMqBrokerMaintenanceWindowStartTime = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerMaintenanceWindowStartTime, _super);
    function DataAwsMqBrokerMaintenanceWindowStartTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerMaintenanceWindowStartTime.prototype, "dayOfWeek", {
        // day_of_week - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('day_of_week');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerMaintenanceWindowStartTime.prototype, "timeOfDay", {
        // time_of_day - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_of_day');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerMaintenanceWindowStartTime.prototype, "timeZone", {
        // time_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_zone');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerMaintenanceWindowStartTime;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerMaintenanceWindowStartTime = DataAwsMqBrokerMaintenanceWindowStartTime;
var DataAwsMqBrokerUser = /** @class */ (function (_super) {
    __extends(DataAwsMqBrokerUser, _super);
    function DataAwsMqBrokerUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMqBrokerUser.prototype, "consoleAccess", {
        // console_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('console_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerUser.prototype, "groups", {
        // groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBrokerUser.prototype, "username", {
        // username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('username');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMqBrokerUser;
}(cdktf.ComplexComputedList));
exports.DataAwsMqBrokerUser = DataAwsMqBrokerUser;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}
*/
var DataAwsMqBroker = /** @class */ (function (_super) {
    __extends(DataAwsMqBroker, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMqBrokerConfig = {}
    */
    function DataAwsMqBroker(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._brokerId = config.brokerId;
        _this._brokerName = config.brokerName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsMqBroker.prototype, "arn", {
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
    Object.defineProperty(DataAwsMqBroker.prototype, "authenticationStrategy", {
        // authentication_strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authentication_strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "autoMinorVersionUpgrade", {
        // auto_minor_version_upgrade - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "brokerId", {
        get: function () {
            return this.getStringAttribute('broker_id');
        },
        set: function (value) {
            this._brokerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMqBroker.prototype.resetBrokerId = function () {
        this._brokerId = undefined;
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "brokerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._brokerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "brokerName", {
        get: function () {
            return this.getStringAttribute('broker_name');
        },
        set: function (value) {
            this._brokerName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMqBroker.prototype.resetBrokerName = function () {
        this._brokerName = undefined;
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "brokerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._brokerName;
        },
        enumerable: false,
        configurable: true
    });
    // configuration - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.configuration = function (index) {
        return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "deploymentMode", {
        // deployment_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_mode');
        },
        enumerable: false,
        configurable: true
    });
    // encryption_options - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.encryptionOptions = function (index) {
        return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "engineType", {
        // engine_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "hostInstanceType", {
        // host_instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // instances - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.instances = function (index) {
        return new DataAwsMqBrokerInstances(this, 'instances', index);
    };
    // ldap_server_metadata - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.ldapServerMetadata = function (index) {
        return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index);
    };
    // logs - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.logs = function (index) {
        return new DataAwsMqBrokerLogs(this, 'logs', index);
    };
    // maintenance_window_start_time - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.maintenanceWindowStartTime = function (index) {
        return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "publiclyAccessible", {
        // publicly_accessible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMqBroker.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMqBroker.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsMqBroker.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // user - computed: true, optional: false, required: false
    DataAwsMqBroker.prototype.user = function (index) {
        return new DataAwsMqBrokerUser(this, 'user', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsMqBroker.prototype.synthesizeAttributes = function () {
        return {
            broker_id: cdktf.stringToTerraform(this._brokerId),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsMqBroker.tfResourceType = "aws_mq_broker";
    return DataAwsMqBroker;
}(cdktf.TerraformDataSource));
exports.DataAwsMqBroker = DataAwsMqBroker;
